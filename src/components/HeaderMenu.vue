<template>
  <div class="top-strip">
    <div class="header-menu">
      <div class="header-contents">
        <div class="header-logo">
          <img src="@/assets/images/HousesLogo.jpg" alt="Living - Real Estate" />
        </div>
        <div class="top-menu">
          <nav>
            <router-link
              to="/"
              class="nav-link"
              :class="{
                'active-link': $route.path === '/' || $route.path.startsWith('/house/')
              }"
            >
              Houses
            </router-link>

            <router-link
              v-if="myProperties.length"
              to="/mylistings"
              class="nav-link"
              :class="{
                'active-link': $route.path.startsWith('/mylistings')
              }"
            >
              My Listings
            </router-link>

            <router-link
              to="/about"
              class="nav-link"
              :class="{
                'active-link': $route.path.startsWith('/about')
              }"
            >
              About
            </router-link>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  props: {
    myProperties: Object
  }
}
</script>

<style>
.top-strip {
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
}
.header-menu {
  width: 100%;
  max-width: 1300px;
  margin: auto;
}
.header-logo img {
  height: 55px;
  align-content: center;
}
.header-contents {
  display: flex;
  align-items: center;
  height: 80px;
  padding-left: 15px;
  padding-right: 15px;
}
.top-menu {
  margin-left: 30px;
}
.nav-link {
  margin-left: 30px;
  margin-right: 30px;
  font-size: 18px;
  text-decoration: none;
  color: #c3c3c3;
}
.active-link {
  font-weight: bold;
  color: #000000;
}
</style>
