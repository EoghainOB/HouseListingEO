<template>
  <div @click="handleClick">
    <div class="return">
      <div
        :class="{
          returnArrowWhite: isHouseDetail && isMobile,
          returnArrowGrey: !isMobile || !isHouseDetail
        }"
      >
        <img
          :src="
            isHouseDetail && isMobile
              ? '/src/components/icons/ic_back_white@3x.png'
              : '/src/components/icons/ic_back_grey@3x.png'
          "
          alt="Return"
        />
      </div>
      <div class="returnText">
        <h3 v-if="$route.path.startsWith('/house/edit')">Back to detail page</h3>
        <h3 v-else>Back to overview</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BackOverview',
  methods: {
    handleClick() {
      if (this.$route.path.startsWith('/house/edit')) {
        window.history.back()
      } else {
        this.$router.push('/')
      }
    }
  },
  computed: {
    isHouseDetail() {
      return this.$route.name === 'HouseDetail'
    },
    isMobile() {
      return window.innerWidth <= 768
    }
  }
}
</script>

<style>
.return {
  padding-top: 50px;
  padding-bottom: 10px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-right: 8px;
  cursor: pointer;
}
.return img {
  padding-right: 8px;
  height: 17px;
}
h3 {
  margin: 0;
  font-size: 16px;
  color: #000000;
  font-weight: 400;
  font-size: 16px;
}

@media only screen and (max-width: 768px) {
  .return {
    position: absolute;
    padding-top: 35px;
    margin-left: 15px;
  }
  .returnText {
    display: none;
  }
}
</style>
