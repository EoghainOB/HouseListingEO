<template>
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
        <div><img src="@/assets/icons/ic_bed@3x.png" /></div>
        <div>
          <h4>{{ house.rooms.bedrooms }}</h4>
        </div>
      </div>
      <div class="home-bath">
        <div><img src="@/assets/icons/ic_bath@3x.png" /></div>
        <div>
          <h4>{{ house.rooms.bathrooms }}</h4>
        </div>
      </div>
      <div class="home-size">
        <div><img src="@/assets/icons/ic_size@3x.png" /></div>
        <div>
          <h4>{{ house.size }} m2</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EditDeleteBtns from '@/components/EditDeleteButtons.vue'

export default {
  name: 'HouseCard',
  components: { EditDeleteBtns },
  props: {
    house: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
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

@media only screen and (max-width: 768px) {
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
  h2 {
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
}
</style>
