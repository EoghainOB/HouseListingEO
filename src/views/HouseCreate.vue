<template>
  <div class="wrapper">
    <div class="main">
      <BackOverview />
      <div class="form-container">
        <div class="page-title"><h1>Create new listing</h1></div>
        <InputForm buttonText="POST" />
      </div>
    </div>
  </div>
</template>

<script>
import BackOverview from '@/components/backOverview.vue'
import InputForm from '@/components/inputForm.vue'

export default {
  name: 'HouseCreate',
  components: { BackOverview, InputForm }
}
</script>

<style scoped>
.form-container {
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 70px;
}
@media only screen and (max-width: 768px) {
  .page-title {
    padding-top: 20px;
    height: 50px;
    text-align: center;
  }
}
</style>
