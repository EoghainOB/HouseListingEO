<template>
  <div class="main">
    <BackOverview linkText="Back to overview" />
    <div class="house-detail-block">
      <div class="house-detail">
        <div v-if="house">
          <div class="home-image">
            <img v-if="house.image" :src="house.image" />
            <div class="rounded-shape"></div>
            <div class="edit-del-mobile">
              <EditDeleteBtns v-if="house.madeByMe" :houseId="house.id" />
            </div>
          </div>
          <div class="listing-details">
            <div class="listing-text">
              <div class="address-edit-line">
                <div class="location-text">
                  <h1>
                    {{ house.location.street }}
                    {{ house.location.houseNumber }}
                    {{ house.location.houseNumberAddition }}
                  </h1>
                </div>
                <div class="edit-del-desktop">
                  <EditDeleteBtns v-if="house.madeByMe" :houseId="house.id" />
                </div>
              </div>
              <div class="location-zip-city">
                <h4>
                  <img src="@/assets/icons/ic_location@3x.png" />{{
                    house.location.zip.toUpperCase()
                  }},
                  {{ house.location.city }}
                </h4>
              </div>
              <div class="secondary-details">
                <div class="location-price">
                  <div><img src="@/assets/icons/ic_price@3x.png" /></div>
                  <div>
                    <h4>{{ house.price.toLocaleString('en-NL') }}</h4>
                  </div>
                </div>
                <div class="home-size">
                  <div><img src="@/assets/icons/ic_size@3x.png" /></div>
                  <div>
                    <h4>{{ house.size }} m2</h4>
                  </div>
                </div>
                <div class="home-built">
                  <div><img src="@/assets/icons/ic_construction_date@3x.png" /></div>
                  <div>
                    <h4>
                      Built in
                      {{ house.constructionYear }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div class="icon-details">
              <div class="home-bed">
                <h4><img src="@/assets/icons/ic_bed@3x.png" />{{ house.rooms.bedrooms }}</h4>
              </div>
              <div class="home-bath">
                <h4><img src="@/assets/icons/ic_bath@3x.png" />{{ house.rooms.bathrooms }}</h4>
              </div>
              <div class="home-garage">
                <h4>
                  <img src="@/assets/icons/ic_garage@3x.png" />{{
                    house.hasGarage === true ? 'Yes' : 'No'
                  }}
                </h4>
              </div>
            </div>
            <div class="house-description">
              <p>{{ house.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <RecommendedHouses :houseId="house.id" v-if="house" />
    </div>
  </div>
</template>

<script>
import apiService from '@/services/apiService'
import BackOverview from '@/components/BackNavigation.vue'
import EditDeleteBtns from '@/components/EditDeleteButtons.vue'
import RecommendedHouses from '@/components/RecommendedHouses.vue'

export default {
  name: 'HouseDetail',
  components: { BackOverview, EditDeleteBtns, RecommendedHouses },
  data() {
    return {
      house: null
    }
  },
  watch: {
    '$route.params.houseId': 'fetchHouseDetails'
  },
  mounted() {
    const houseId = this.$route.params.houseId
    this.fetchHouseDetails(houseId)
  },
  created() {
    const houseId = this.$route.params.houseId
    this.fetchHouseDetails(houseId)
  },
  methods: {
    fetchHouseDetails(houseId) {
      apiService
        .getHouseById(houseId)
        .then((response) => {
          this.house = response.data[0]
        })
        .catch((error) => {
          console.error('Error fetching house details:', error)
        })
    }
  }
}
</script>

<style scoped>
.house-detail-block {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.house-detail {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: #ffffff;
  margin-top: 20px;
  margin-left: 15px;
  margin-right: 15px;
  max-width: 812px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.14);
}
.listing-details {
  padding: 10px 30px 10px 30px;
}
.location-price,
.location-zip-city {
  padding-bottom: 20px;
}
.location-text {
  padding: 0;
}
.address-edit-line {
  display: flex;
  justify-content: space-between;
}
.edit-del-desktop {
  display: flex;
  align-items: center;
}
.edit-del-mobile {
  display: none;
}
.icon-details {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-right: 8px;
}
.secondary-details {
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
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
.home-size img,
.home-built img,
.location-zip-city img,
.location-price img,
.home-built img,
.home-garage img {
  padding-right: 8px;
  height: 17px;
}
.location-price,
.home-built,
.home-size {
  display: flex;
  align-items: flex-end;
  margin-right: 20px;
}
h4 {
  margin: 0;
  font-size: 16px;
  color: #4a4b4c;
}
p {
  font-size: 18px;
  color: #4a4b4c;
}
.home-image img {
  width: 100%;
  height: auto;
  border-radius: 0px;
}

@media only screen and (max-width: 768px) {
  .house-detail-block {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .house-detail {
    margin-top: 0px;
    margin-left: 0px;
    margin-right: 0px;
  }
  .listing-details {
    background-color: white;
    position: relative;
    top: -30px;
    padding-left: 20px;
    padding-right: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    z-index: 99;
  }
  ul {
    margin-bottom: 80px;
  }
  h4,
  p {
    font-size: 12px;
  }
  .edit-del-mobile {
    display: block;
    position: absolute;
    top: 35px;
    right: 15px;
  }
  .edit-del-desktop {
    display: none;
  }
  .secondary-details,
  .location-zip-city {
    padding-bottom: 10px;
  }

  .location-text,
  .location-price {
    padding-bottom: 0px;
  }
  .home-bed img,
  .home-bath img,
  .home-size img,
  .home-built img,
  .location-zip-city img,
  .location-price img,
  .home-built img,
  .home-garage img {
    padding-right: 8px;
    height: 14px;
  }
  .home-image {
    height: auto;
  }
  .home-image img {
    width: 100%;
    height: auto;
    border-radius: 0px;
  }
}

@media only screen and (max-width: 842px) {
  .house-detail-block {
    flex-wrap: wrap;
  }
}
</style>
