<template>
  <div class="main">
    <CreateMenu :title="menuTitle" />
    <SearchFilter v-model="searchQuery" @filterChanged="updateFilter" />
    <div>
      <ul class="house-listing">
        <div class="results-found" v-if="searchQuery.length > 0">
          <h2 v-if="filteredHouses.length > 0">
            {{ filteredHouses.length }} result<span v-if="filteredHouses.length !== 1">s</span>
            <span> found</span>
          </h2>
        </div>
        <div class="house-list-empty" v-if="filteredHouses < 1 && searchQuery.length > 0">
          <img src="@/assets/images/img_empty_houses@3x.png" alt="No results" />
          <h3>
            No results found<br />
            Please try another keyword.
          </h3>
        </div>
        <li
          @click="showDetails(house.id)"
          class="list-item"
          v-for="house in filteredHouses"
          :key="house.id"
        >
          <HouseCard :house="house" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateMenu from '@/components/CreateMenu.vue'
import SearchFilter from '@/components/SearchFilter.vue'
import HouseCard from '@/components/HouseCard.vue'

export default {
  name: 'HouseList',
  components: { CreateMenu, SearchFilter, HouseCard },
  data() {
    return {
      currentFilter: 'Price',
      searchQuery: ''
    }
  },
  created() {
    this.fetchHouses()
  },
  methods: {
    ...mapActions(['fetchHouses']),
    showDetails(houseId) {
      this.$router.push({ name: 'HouseDetail', params: { houseId: houseId } })
    },
    updateFilter({ filter, searchQuery }) {
      this.currentFilter = filter
      this.searchQuery = searchQuery
    }
  },
  computed: {
    ...mapGetters(['allHouses', 'myProperties']),
    myListingsPage() {
      return this.$route.path.startsWith('/mylistings')
    },
    menuTitle() {
      return this.$route.path.startsWith('/mylistings') ? 'My Listings' : 'Houses'
    },
    filteredHouses() {
      let sortedHouses = this.myListingsPage ? [...this.myProperties] : [...this.allHouses]

      if (this.currentFilter === 'Price') {
        sortedHouses.sort((a, b) => a.price - b.price)
      } else if (this.currentFilter === 'Size') {
        sortedHouses.sort((a, b) => a.size - b.size)
      }

      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        sortedHouses = sortedHouses.filter((house) => {
          const location = house.location
          return (
            (location.street + location.houseNumber + location.houseNumberAddition)
              .toLowerCase()
              .includes(query) ||
            house.price.toString().includes(query) ||
            (location.zip + ', ' + location.city).toLowerCase().includes(query) ||
            house.size.toString().includes(query)
          )
        })
      }
      return sortedHouses
    }
  }
}
</script>

<style scoped>
h2 {
  color: #000000;
  font-weight: bold;
  font-size: 22px;
  margin: 0px;
}
h3 {
  font-size: 18px;
  font-weight: normal;
}
.list-item {
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.14);
  cursor: pointer;
}
.results-found {
  padding-top: 10px;
}

.house-listing {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 40px;
}

.house-list-empty {
  text-align: center;
  padding: 40px;
}
.house-list-empty img {
  width: 50%;
}

@media only screen and (max-width: 768px) {
  ul {
    margin-bottom: 80px;
  }
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 14px;
  }
  .list-item {
    padding: 10px;
  }
  .house-listing {
    margin-bottom: 80px;
  }
  .house-list-empty {
    text-align: center;
    padding: 10px;
    margin-top: 40px;
  }
  .house-list-empty img {
    width: 80%;
  }
}
</style>
