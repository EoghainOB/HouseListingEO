<template>
  <div class="edit-del-buttons">
    <div @click="editHouse($event)">
      <img :src="editIcon" alt="edit" />
    </div>
    <div @click="openModal($event)">
      <img :src="deleteIcon" alt="delete" />
    </div>
  </div>
  <div class="modal-overlay" v-if="isModalOpen">
    <ModalPopup @delete-house="removeHouse(houseId)" @close-modal="isModalOpen = false" />
  </div>
</template>

<script>
import ModalPopup from '@/components/ModalPopup.vue'
import apiService from '@/services/apiService'

import editIconWhite from '@/assets/icons/ic_edit_white@3x.png'
import editIcon from '@/assets/icons/ic_edit@3x.png'
import deleteIconWhite from '@/assets/icons/ic_delete_white@3x.png'
import deleteIcon from '@/assets/icons/ic_delete@3x.png'

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
  computed: {
    editIcon() {
      return this.isMobile ? (this.isHomePage ? editIconWhite : editIcon) : editIcon
    },
    deleteIcon() {
      return this.isMobile ? (this.isHomePage ? deleteIconWhite : deleteIcon) : deleteIcon
    },
    isMobile() {
      return window.innerWidth <= 768
    },
    isHomePage() {
      return this.$route.path.startsWith('/house/')
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
.edit-del-buttons {
  display: flex;
  align-items: center;
}
.edit-del-buttons img {
  padding-right: 8px;
  height: 25px;
  margin-left: 20px;
}
@media only screen and (max-width: 768px) {
  .edit-del-buttons img {
    padding-right: 6px;
    height: 14px;
    margin-left: 8px;
  }
}
</style>
