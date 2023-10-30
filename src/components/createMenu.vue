<template>
  <div class="sub-menu">
    <div>
      <h1>{{ title }}</h1>
    </div>
    <!-- Link to create a new house (desktop) -->
    <router-link to="/house/create">
      <div class="create-button-desktop">
        <img src="src/assets/icons/ic_plus_white@3x.png" />CREATE NEW
      </div>
    </router-link>
  </div>
  <!-- Mobile version of the create button -->
  <div class="btn-mobile">
    <router-link to="/house/create">
      <div class="create-button-mobile">
        <img src="src/assets/icons/ic_plus_grey@3x.png" />
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CreateMenu',
  props: {
    title: String
  }
}
</script>

<style scoped>
.sub-menu {
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  align-items: center;
  height: 80px;
  padding-left: 15px;
  padding-right: 15px;
}

.create-button-desktop {
  background-color: #eb5440;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  padding: 15px 30px 15px 30px;
}

.create-button-desktop img {
  height: 16px;
  margin-right: 10px;
}

.create-button-mobile {
  display: none;
}

@media only screen and (max-width: 768px) {
  .sub-menu {
    margin-top: 0px;
    height: 30px;
    text-align: center;
    justify-content: center;
  }
  .create-button-mobile {
    display: block;
  }
  .create-button-desktop {
    display: none;
  }

  .create-button-mobile img {
    height: 18px;
    margin-right: 10px;
  }
  .btn-mobile {
    position: absolute;
    right: 12px;
    top: 35px;
  }
}
</style>
