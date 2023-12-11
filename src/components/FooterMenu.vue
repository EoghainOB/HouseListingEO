<template>
  <div class="bottom-strip">
    <div class="footer-menu">
      <div class="bottom-menu">
        <div class="nav-icons">
          <router-link to="/" class="nav-link">
            <img :src="homeIcon" alt="Home" />
          </router-link>
        </div>
        <div class="nav-icons" v-if="myProperties.length">
          <router-link to="/mylistings" class="nav-link">
            <img :src="listingsIcon" alt="My Listings" />
          </router-link>
        </div>
        <div class="nav-icons">
          <router-link to="/about" class="nav-link">
            <img :src="infoIcon" alt="About" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the images
import homeIconActive from '@/assets/icons/ic_mobile_navigarion_home_active@3x.png'
import homeIcon from '@/assets/icons/ic_mobile_navigarion_home@3x.png'
import listingsIconActive from '@/assets/icons/ic_mobile_navigarion_listings_active@3x.svg'
import listingsIcon from '@/assets/icons/ic_mobile_navigarion_listings@3x.svg'
import infoIconActive from '@/assets/icons/ic_mobile_navigarion_info_active@3x.png'
import infoIcon from '@/assets/icons/ic_mobile_navigarion_info@3x.png'

export default {
  name: 'FooterMenu',
  props: {
    myProperties: Object
  },
  computed: {
    homeIcon() {
      return this.$route.path === '/' || this.$route.path.startsWith('/house/')
        ? homeIconActive
        : homeIcon
    },
    listingsIcon() {
      return this.$route.path.startsWith('/mylistings') ? listingsIconActive : listingsIcon
    },
    infoIcon() {
      return this.$route.path.startsWith('/about') ? infoIconActive : infoIcon
    }
  }
}
</script>

<style>
.bottom-strip {
  box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  height: 60px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

.footer-menu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.bottom-menu {
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 100%;
}

.bottom-menu img {
  height: 25px;
}
</style>
