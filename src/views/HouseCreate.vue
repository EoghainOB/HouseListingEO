<template>
  <BackOverview />
  <div>
    <div class="sectionTitle"><h1>Create new listing</h1></div>
  </div>
  <InputForm />
</template>

<script>
import BackOverview from '@/components/backOverview.vue'
import InputForm from '@/components/inputForm.vue'

export default {
  name: 'HouseCreate',
  components: { BackOverview, InputForm }
}
</script>
<style></style>
