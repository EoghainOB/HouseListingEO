<template>
  <BackOverview />
  <div class="formContainer">
    <div class="pageTitle"><h1>Edit listing</h1></div>
    <InputForm buttonText="SAVE" />
  </div>
</template>

<script>
import BackOverview from '@/components/backOverview.vue'
import InputForm from '@/components/inputForm.vue'

export default {
  name: 'HouseEdit',
  components: { BackOverview, InputForm }
}
</script>
<style scoped>
.formContainer {
  background-image: url('@/components/images/img_background@3x.png');
  background-repeat: no-repeat;
  background-size: 100vw;
  padding-left: 15px;
  padding-right: 15px;
  padding-bottom: 70px;
}
@media only screen and (max-width: 768px) {
  .formContainer {
    background-position: center bottom;
  }
  .pageTitle {
    padding-top: 20px;
    height: 50px;
    text-align: center;
  }
  h1 {
    font-size: 18px;
  }
}
</style>
