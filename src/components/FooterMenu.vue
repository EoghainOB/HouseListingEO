<template>
  <div class="bottom-strip">
    <div class="footer-menu">
      <div class="bottom-menu">
        <div class="nav-icons">
          <!-- Link to the Home page with dynamic icon -->
          <router-link to="/" class="nav-link">
            <img
              :src="
                $route.path === '/' || $route.path.startsWith('/house/')
                  ? '/src/assets/icons/ic_mobile_navigarion_home_active@3x.png'
                  : '/src/assets/icons/ic_mobile_navigarion_home@3x.png'
              "
              alt="Home"
            />
          </router-link>
        </div>
        <div class="nav-icons" v-if="myProperties.length">
          <!-- Link to the My Listings page with dynamic icon -->
          <router-link to="/mylistings" class="nav-link">
            <img
              :src="
                $route.path.startsWith('/mylistings')
                  ? '/src/assets/icons/ic_mobile_navigarion_listings_active@3x.svg'
                  : '/src/assets/icons/ic_mobile_navigarion_listings@3x.svg'
              "
              alt="My Listings"
            />
          </router-link>
        </div>
        <div class="nav-icons">
          <!-- Link to the About page with dynamic icon -->
          <router-link to="/about" class="nav-link">
            <img
              :src="
                $route.path.startsWith('/about')
                  ? '/src/assets/icons/ic_mobile_navigarion_info_active@3x.png'
                  : '/src/assets/icons/ic_mobile_navigarion_info@3x.png'
              "
              alt="About"
            />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterMenu',
  props: {
    myProperties: Object
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
