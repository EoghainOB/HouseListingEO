<template>
  <router-link to="/">
    <div class="return">
      <div>
        <img src="../components/icons/ic_back_grey@3x.png" alt="Return" />
      </div>
      <div>
        <h3>Back to overview</h3>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'BackOverview'
}
</script>

<style>
.return {
  padding-top: 50px;
  padding-bottom: 10px;
}
.return img {
  padding-right: 8px;
  height: 17px;
}
.return {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  padding-right: 8px;
}
h3 {
  margin: 0;
  font-size: 16px;
  color: #000000;
  font-weight: 400;
  font-size: 16px;
}
</style>
