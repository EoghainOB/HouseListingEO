<template>
  <div class="bottomStrip">
    <div class="footerMenu">
      <div class="bottomMenu">
        <div class="navIcons">
          <router-link to="/" class="nav-link">
            <img
              :src="
                $route.path === '/' || $route.path.startsWith('/house/')
                  ? '/src/components/icons/ic_mobile_navigarion_home_active@3x.png'
                  : '/src/components/icons/ic_mobile_navigarion_home@3x.png'
              "
              alt="Home"
            />
          </router-link>
        </div>
        <div class="navIcons">
          <router-link to="/about" class="nav-link">
            <img
              :src="
                $route.path.startsWith('/about')
                  ? '/src/components/icons/ic_mobile_navigarion_info_active@3x.png'
                  : '/src/components/icons/ic_mobile_navigarion_info@3x.png'
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
  name: 'FooterMenu'
}
</script>

<style>
.bottomStrip {
  box-shadow: 0px 0px 14px 5px rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  height: 60px;
  position: fixed;
  bottom: 0px;
  width: 100%;
}

.footerMenu {
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
}

.bottomMenu {
  display: flex;
  justify-content: space-around;
  margin: auto;
  width: 100%;
}

.bottomMenu img {
  height: 25px;
}
</style>
