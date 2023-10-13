<template>
  <div class="formContainer">
    <BackOverview />
    <div>
      <div><h1>Create new listing</h1></div>
    </div>
    <InputForm />
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
.formContainer {
  padding-left: 15px;
  padding-right: 15px;
}
@media only screen and (max-width: 768px) {
  .formContainer {
    margin-bottom: 80px;
  }
  h1 {
    font-size: 18px;
  }
}
</style>
