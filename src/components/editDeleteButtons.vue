<template>
  <div class="editDelButtons">
    <div @click="editHouse($event)">
      <img src="../components/icons/ic_edit@3x.png" alt="edit" />
    </div>
    <div @click="openModal($event)">
      <img src="../components/icons/ic_delete@3x.png" alt="delete" />
    </div>
  </div>
  <div class="modal-overlay" v-if="isModalOpen">
    <ModalPopup @delete-house="removeHouse(houseId)" @close-modal="isModalOpen = false" />
  </div>
</template>

<script>
import ModalPopup from '@/components/modalPopup.vue'
import apiService from '../services/apiService'

export default {
  name: 'EditDeleteBtns',
  components: { ModalPopup },
  props: {
    houseId: Number
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    removeHouse(houseId) {
      apiService
        .deleteHouse(houseId)
        .then(() => {
          this.$router.push('/')
        })
        .catch((error) => {
          console.error('Error fetching house details:', error)
        })
    },
    openModal(event) {
      event.stopPropagation()
      this.isModalOpen = true
    },
    editHouse(event) {
      event.stopPropagation()
      this.$router.push({
        name: 'HouseEdit',
        query: { houseId: this.houseId }
      })
    }
  }
}
</script>

<style>
.editDelButtons {
  display: flex;
  align-items: center;
}
.editDelButtons img {
  padding-right: 8px;
  height: 25px;
  margin-left: 20px;
}
</style>
