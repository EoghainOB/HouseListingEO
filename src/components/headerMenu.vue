<template>
  <div class="topStrip">
    <div class="headerMenu">
      <div class="headerLogo">
        <img src="../components/images/img_logo_dtt@3x.png" alt="DTT" />
      </div>
      <div class="topMenu">
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
</template>

<script>
export default {
  name: 'HeaderMenu'
}
</script>

<style>
.topStrip {
  box-shadow: 0px 0px 14px -5px rgba(0, 0, 0, 0.14);
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
}
.headerMenu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: auto;
}
.headerLogo img {
  height: 45px;
  align-content: center;
}

.topMenu {
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
