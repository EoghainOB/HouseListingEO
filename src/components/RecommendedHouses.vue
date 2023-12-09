<template>
  <div class="recommended-block">
    <h2>Recommend for you</h2>
    <ul v-if="houseId">
      <li
        @click="showDetails(house.id)"
        class="house-container"
        v-for="house in filteredHouses"
        :key="house.id"
      >
        <RecommendedHouseCard :house="house" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import RecommendedHouseCard from '@/components/RecommendedHouseCard.vue'

export default {
  components: { RecommendedHouseCard },
  name: 'RecommendedHouses',
  props: {
    houseId: Number
  },
  created() {
    this.fetchHouses()
  },
  methods: {
    ...mapActions(['fetchHouses']),
    showDetails(houseId) {
      this.$router.push({ name: 'HouseDetail', params: { houseId: houseId } })
    }
  },
  computed: {
    ...mapGetters(['allHouses']),
    filteredHouses() {
      const currentHouse = this.allHouses.find((house) => house.id === this.houseId)

      if (currentHouse) {
        const filteredHouses = this.allHouses.filter(
          (house) =>
            (house.location.zip === currentHouse.location.zip ||
              house.location.city === currentHouse.location.city) &&
            house.id !== currentHouse.id
        )
        filteredHouses.sort((a, b) => a.price - b.price)

        if (filteredHouses.length === 0) {
          const newestHouses = this.allHouses
            .filter((house) => house.id !== currentHouse.id)
            .sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded))
            .slice(0, 3)
          return newestHouses
        }
        return filteredHouses.slice(0, 3)
      }
      return []
    }
  }
}
</script>

<style>
.recommended-block {
  max-width: 400px;
  min-width: 330px;
  width: 100%;
  margin-right: 15px;
  margin-bottom: 60px;
}
.house-container {
  display: flex;
  justify-content: flex-start;
  background-color: #ffffff;
  padding: 20px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.14);
  cursor: pointer;
}

@media only screen and (max-width: 842px) {
  .recommended-block {
    max-width: 100%;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 0px;
  }
}

@media only screen and (max-width: 768px) {
  .recommended-block {
    max-width: 100%;
    min-width: 230px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: 0px;
  }
}
</style>
