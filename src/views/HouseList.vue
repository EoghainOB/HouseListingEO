<template>
  <div class="main">
    <CreateMenu />
    <SearchFilter v-model="searchQuery" @filterChanged="updateFilter" />
    <div>
      <ul class="house-listing">
        <!-- Display number of results found or display message if no results found -->
        <div class="results-found" v-if="searchQuery.length > 0">
          <h2 v-if="filteredHouses.length > 0">
            {{ filteredHouses.length }} result<span v-if="filteredHouses.length !== 1">s</span>
            found
          </h2>
        </div>
        <div class="house-list-empty" v-if="filteredHouses < 1 && searchQuery.length > 0">
          <img src="@/assets/images/img_empty_houses@3x.png" alt="No results" />
          <h3>
            No results found<br />
            Please try another keyword.
          </h3>
        </div>
        <!-- Loop through and display property listings -->
        <li
          @click="showDetails(house.id)"
          class="list-item"
          v-for="house in filteredHouses"
          :key="house.id"
        >
          <div class="home-image">
            <img :src="house.image" />
          </div>
          <div class="listing-details">
            <div class="listing-text">
              <div class="address-edit-line">
                <div class="location-text">
                  <h2>
                    {{ house.location.street }}
                    {{ house.location.houseNumber }}
                    {{ house.location.houseNumberAddition }}
                  </h2>
                </div>
                <EditDeleteBtns v-if="house.madeByMe" :houseId="house.id" />
              </div>
              <div class="location-price">
                <h4>€ {{ house.price.toLocaleString('en-NL') }}</h4>
              </div>
              <div class="location-zip-city">
                <h4>{{ house.location.zip }}, {{ house.location.city }}</h4>
              </div>
            </div>
            <div class="icon-details">
              <div class="home-bed">
                <div><img src="../assets/icons/ic_bed@3x.png" /></div>
                <div>
                  <h4>{{ house.rooms.bedrooms }}</h4>
                </div>
              </div>
              <div class="home-bath">
                <div><img src="../assets/icons/ic_bath@3x.png" /></div>
                <div>
                  <h4>{{ house.rooms.bathrooms }}</h4>
                </div>
              </div>
              <div class="home-size">
                <div><img src="../assets/icons/ic_size@3x.png" /></div>
                <div>
                  <h4>{{ house.size }} m2</h4>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreateMenu from '@/components/createMenu.vue'
import SearchFilter from '@/components/searchFilter.vue'
import EditDeleteBtns from '@/components/editDeleteButtons.vue'

export default {
  name: 'HouseList',
  components: { CreateMenu, SearchFilter, EditDeleteBtns },
  data() {
    return {
      currentFilter: 'Price',
      searchQuery: ''
    }
  },
  created() {
    // Fetch property listings when the component is created
    this.fetchHouses()
  },
  methods: {
    // Map Vuex actions for fetching property listings
    ...mapActions(['fetchHouses']),
    showDetails(houseId) {
      // Navigate to the property details page
      this.$router.push({ name: 'HouseDetail', params: { houseId: houseId } })
    },
    updateFilter({ filter, searchQuery }) {
      this.currentFilter = filter
      this.searchQuery = searchQuery
    }
  },
  computed: {
    // Map Vuex getters to access property listings
    ...mapGetters(['allHouses']),
    filteredHouses() {
      let sortedHouses = []

      if (Array.isArray(this.allHouses)) {
        // Create a copy of property listings for sorting
        sortedHouses = [...this.allHouses]

        // Sort property listings
        if (this.currentFilter === 'Price') {
          sortedHouses.sort((a, b) => a.price - b.price)
        } else if (this.currentFilter === 'Size') {
          sortedHouses.sort((a, b) => a.size - b.size)
        }

        // Filter property listings based on search query
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
      }
      return sortedHouses
    }
  }
}
</script>

<style scoped>
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
.listing-details {
  padding: 10px;
  margin-left: 10px;
  width: 100%;
}
.location-text,
.location-price,
.location-zip-city {
  padding-bottom: 10px;
}
.address-edit-line {
  display: flex;
  justify-content: space-between;
}
.icon-details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-right: 8px;
}
.home-bed,
.home-bath,
.home-size {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
.home-bed img,
.home-bath img,
.home-size img {
  padding-right: 8px;
  height: 17px;
}
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
h4 {
  margin: 0;
  font-size: 16px;
  color: #4a4b4c;
}
.home-image img {
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
}
.house-list-empty {
  text-align: center;
  padding: 40px;
}
.house-list-empty img {
  width: 50%;
}
.results-found {
  padding-top: 10px;
}
.house-listing {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 40px;
}

@media only screen and (max-width: 768px) {
  .list-item {
    padding: 10px;
  }
  .listing-details {
    padding: 4px;
    margin-left: 10px;
    border-top-left-radius: 10%;
    border-top-right-radius: 10%;
  }
  .home-image img {
    width: 90px;
    height: 90px;
    object-fit: cover;
    border-radius: 10px;
  }
  .house-list-empty {
    text-align: center;
    padding: 10px;
    margin-top: 40px;
  }
  .house-list-empty img {
    width: 80%;
  }
  ul {
    margin-bottom: 80px;
  }
  h2 {
    font-size: 14px;
  }
  h3 {
    font-size: 14px;
  }
  h4 {
    font-size: 12px;
  }
  .location-text,
  .location-price {
    padding-bottom: 0px;
  }
  .home-bed img,
  .home-bath img,
  .home-size img {
    padding-right: 8px;
    height: 14px;
  }
  .house-listing {
    margin-bottom: 80px;
  }
}
</style>
