<template>
  <div class="wrapper">
    <div class="main">
      <BackOverview linkText="Back to overview" />
      <div class="form-container">
        <div class="page-title"><h1>Create new listing</h1></div>
        <CreateEditForm buttonText="POST" />
      </div>
    </div>
  </div>
</template>

<script>
import BackOverview from '@/components/BackNavigation.vue'
import CreateEditForm from '@/components/CreateEditForm.vue'

export default {
  name: 'HouseCreate',
  components: { BackOverview, CreateEditForm }
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
