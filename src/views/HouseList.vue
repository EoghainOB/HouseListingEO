<template>
  <CreateMenu />
  <SearchFilter v-model="searchQuery" @filterChanged="updateFilter" />
  <div>
    <ul class="houseListing">
      <li
        @click="showDetails(house.id)"
        class="listItem"
        v-for="house in filteredHouses"
        :key="house.id"
      >
        <div class="homeImage">
          <img :src="house.image" />
        </div>
        <div class="listingDetails">
          <div class="listingText">
            <div class="addressEditLine">
              <div class="locationText">
                <h2>
                  {{ house.location.street }}
                  {{ house.location.houseNumber }}
                  {{ house.location.houseNumberAddition }}
                </h2>
              </div>
              <EditDeleteBtns v-if="house.id > 1100" :houseId="house.id" />
            </div>
            <div class="locationPrice">
              <h4>€ {{ house.price.toLocaleString('en-NL') }}</h4>
            </div>
            <div class="locationZipCity">
              <h4>{{ house.location.zip }}, {{ house.location.city }}</h4>
            </div>
          </div>
          <div class="iconDetails">
            <div class="homeBed">
              <div><img src="../components/icons/ic_bed@3x.png" /></div>
              <div>
                <h4>{{ house.rooms.bedrooms }}</h4>
              </div>
            </div>
            <div class="homeBath">
              <div><img src="../components/icons/ic_bath@3x.png" /></div>
              <div>
                <h4>{{ house.rooms.bathrooms }}</h4>
              </div>
            </div>
            <div class="homeSize">
              <div><img src="../components/icons/ic_size@3x.png" /></div>
              <div>
                <h4>{{ house.size }} m2</h4>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import apiService from '@/services/apiService'
import CreateMenu from '@/components/createMenu.vue'
import SearchFilter from '@/components/searchFilter.vue'
import EditDeleteBtns from '@/components/editDeleteButtons.vue'

export default {
  name: 'HouseList',
  components: { CreateMenu, SearchFilter, EditDeleteBtns },
  data() {
    return {
      houses: [],
      currentFilter: 'Price',
      searchQuery: ''
    }
  },
  created() {
    this.fetchHouses()
  },
  methods: {
    fetchHouses() {
      apiService
        .getHouses()
        .then((response) => {
          this.houses = response.data
        })
        .catch((error) => {
          console.error('Error fetching houses:', error)
        })
    },
    showDetails(houseId) {
      this.$router.push({ name: 'HouseDetail', params: { houseId: houseId } })
    },
    updateFilter(filter) {
      this.currentFilter = filter
    }
  },
  computed: {
    filteredHouses() {
      let sortedHouses = [...this.houses]
      if (this.currentFilter === 'Price') {
        sortedHouses.sort((a, b) => a.price - b.price)
      } else if (this.currentFilter === 'Size') {
        sortedHouses.sort((a, b) => a.size - b.size)
      }
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase()
        sortedHouses = sortedHouses.filter(
          (house) =>
            house.title.toLowerCase().includes(query) ||
            house.price.toString().includes(query) ||
            house.location.zip.includes(query) ||
            house.size.toString().includes(query) ||
            house.location.city.toLowerCase().includes(query)
        )
      }
      return sortedHouses
    }
  }
}
</script>

<style scoped>
.listItem {
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

.listingDetails {
  padding: 10px;
  margin-left: 10px;
  width: 100%;
}

.locationText,
.locationPrice,
.locationZipCity {
  padding-bottom: 10px;
}

.addressEditLine {
  display: flex;
  justify-content: space-between;
}

.iconDetails {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-right: 8px;
}

.homeBed,
.homeBath,
.homeSize {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.homeBed img,
.homeBath img,
.homeSize img {
  padding-right: 8px;
  height: 17px;
}

h2 {
  color: #000000;
  font-weight: bold;
  font-size: 22px;
  margin: 0px;
}

h4 {
  margin: 0;
  font-size: 16px;
  color: #4a4b4c;
}

.homeImage img {
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
}
</style>
