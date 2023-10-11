<template>
  <div class="subMenu">
    <div class="sectionTitle"><h1>Houses</h1></div>
    <router-link to="/house/create">
      <div class="createButton">
        <img src="src/components/icons/ic_plus_white@3x.png" />CREATE NEW
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CreateMenu'
}
</script>

<style>
.subMenu {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  align-items: center;
  height: 80px;
}

.createButton {
  background-color: #eb5440;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  padding: 15px 30px 15px 30px;
}

.createButton img {
  height: 16px;
  margin-right: 10px;
}
</style>
