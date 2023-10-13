<template>
  <div class="editDelButtons">
    <!-- Edit button -->
    <div @click="editHouse($event)">
      <img
        :src="isMobile ? (isHomePage ? mobileIcons.edit : desktopIcons.edit) : desktopIcons.edit"
        alt="edit"
      />
    </div>
    <!-- Delete button with modal overlay -->
    <div @click="openModal($event)">
      <img
        :src="
          isMobile ? (isHomePage ? mobileIcons.delete : desktopIcons.delete) : desktopIcons.delete
        "
        alt="delete"
      />
    </div>
  </div>
  <!-- Modal overlay for delete confirmation -->
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
      isModalOpen: false,
      desktopIcons: {
        edit: '/src/components/icons/ic_edit@3x.png',
        delete: '/src/components/icons/ic_delete@3x.png'
      },
      mobileIcons: {
        edit: '/src/components/icons/ic_edit_white@3x.png',
        delete: '/src/components/icons/ic_delete_white@3x.png'
      }
    }
  },
  methods: {
    // Method to remove a house
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
      // Method to open the delete confirmation modal
      event.stopPropagation()
      this.isModalOpen = true
    },
    editHouse(event) {
      // Method to navigate to the house edit page
      event.stopPropagation()
      this.$router.push({
        name: 'HouseEdit',
        query: { houseId: this.houseId }
      })
    }
  },
  computed: {
    // Check if the current view is in a mobile layout
    isMobile() {
      return window.innerWidth <= 768
    },
    // Check if the current page is the home page
    isHomePage() {
      return this.$route.path.startsWith('/house/')
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
@media only screen and (max-width: 768px) {
  .editDelButtons img {
    padding-right: 6px;
    height: 14px;
    margin-left: 8px;
  }
}
</style>
