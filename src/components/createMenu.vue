<template>
  <div class="subMenu">
    <div><h1>Houses</h1></div>
    <router-link to="/house/create">
      <div class="createButtonDesktop">
        <img src="src/components/icons/ic_plus_white@3x.png" />CREATE NEW
      </div>
    </router-link>
  </div>
  <div class="btnMobile">
    <router-link to="/house/create">
      <div class="createButtonMobile">
        <img src="src/components/icons/ic_plus_grey@3x.png" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CreateMenu'
}
</script>

<style scoped>
.subMenu {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  height: 80px;
  padding-left: 15px;
  padding-right: 15px;
}

.createButtonDesktop {
  background-color: #eb5440;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  padding: 15px 30px 15px 30px;
}

.createButtonDesktop img {
  height: 16px;
  margin-right: 10px;
}

.createButtonMobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .subMenu {
    margin-top: 20px;
    height: 50px;
    text-align: center;
    justify-content: center;
  }
  .createButtonMobile {
    display: block;
  }
  .createButtonDesktop {
    display: none;
  }
  h1 {
    font-size: 18px;
  }
  .sectionTitle h1 {
    font-size: 18px;
  }
  .createButtonMobile img {
    height: 18px;
    margin-right: 10px;
  }
  .btnMobile {
    position: absolute;
    right: 12px;
    top: 35px;
  }
}
</style>
