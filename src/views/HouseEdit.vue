<template>
  <BackOverview />
  <div>
    <div class="sectionTitle"><h1>Edit listing</h1></div>
  </div>
  <InputForm />
</template>

<script>
import BackOverview from '@/components/backOverview.vue'
import InputForm from '@/components/inputForm.vue'

export default {
  name: 'HouseEdit',
  components: { BackOverview, InputForm }
}
</script>
<style>
@media only screen and (max-width: 768px) {
  .listItem {
    background-color: aqua;
  }
}
</style>
