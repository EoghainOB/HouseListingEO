<template>
  <BackOverview />
  <div>
    <div class="houseDetail">
      <div v-if="house">
        <div class="homeImage">
          <img v-if="house.image" :src="house.image" />
        </div>
        <div class="listingDetails">
          <div class="listingText">
            <div class="addressEditLine">
              <div class="locationText">
                <h1>
                  {{ house.location.street }}
                  {{ house.location.houseNumber }}
                  {{ house.location.houseNumberAddition }}
                </h1>
              </div>
              <EditDeleteBtns v-if="house.madeByMe" :houseId="house.id" />
            </div>
            <div class="locationZipCity">
              <h4>
                <img src="../components/icons/ic_location@3x.png" />{{ house.location.zip }},
                {{ house.location.city }}
              </h4>
            </div>
            <div class="secondaryDetails">
              <div class="locationPrice">
                <div><img src="../components/icons/ic_price@3x.png" /></div>
                <div>
                  <h4>{{ house.price.toLocaleString('en-NL') }}</h4>
                </div>
              </div>
              <div class="homeSize">
                <div><img src="../components/icons/ic_size@3x.png" /></div>
                <div>
                  <h4>{{ house.size }} m2</h4>
                </div>
              </div>
              <div class="homeBuilt">
                <div><img src="../components/icons/ic_construction_date@3x.png" /></div>
                <div>
                  <h4>
                    Built in
                    {{ house.constructionYear }}
                  </h4>
                </div>
              </div>
            </div>
          </div>
          <div class="iconDetails">
            <div class="homeBed">
              <h4><img src="../components/icons/ic_bed@3x.png" />{{ house.rooms.bedrooms }}</h4>
            </div>
            <div class="homeBath">
              <h4><img src="../components/icons/ic_bath@3x.png" />{{ house.rooms.bathrooms }}</h4>
            </div>
            <div class="homeGarage">
              <h4>
                <img src="../components/icons/ic_garage@3x.png" />{{
                  house.hasGarage === true ? 'Yes' : 'No'
                }}
              </h4>
            </div>
          </div>
          <div class="houseDescription">
            <p>{{ house.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import apiService from '../services/apiService'
import BackOverview from '@/components/backOverview.vue'
import EditDeleteBtns from '@/components/editDeleteButtons.vue'

export default {
  name: 'HouseDetail',
  components: { BackOverview, EditDeleteBtns },
  data() {
    return {
      house: null
    }
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
.houseDetail {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: #ffffff;
  margin-top: 20px;
  max-width: 812px;
  margin-bottom: 50px;
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.14);
}

.listingDetails {
  padding: 10px 30px 10px 30px;
}

.locationPrice,
.locationZipCity {
  padding-bottom: 20px;
}

.locationText {
  padding: 0;
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

.secondaryDetails {
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
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
.homeSize img,
.homeBuilt img,
.locationZipCity img,
.locationPrice img,
.homeBuilt img,
.homeGarage img {
  padding-right: 8px;
  height: 17px;
}

.locationPrice,
.homeBuilt,
.homeSize {
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

.homeImage img {
  width: 812px;
  height: auto;
  border-radius: 0px;
}
</style>
