<template>
  <div class="modal-content">
    <h2>Delete Listing</h2>
    <p>
      Are you sure you want to delete this listing?<br />
      This action can not be undone
    </p>
    <div class="delete-button" @click="deleteHouse">YES, DELETE</div>
    <div class="go-back-button" @click="closeModal">GO BACK</div>
  </div>
</template>

<script>
export default {
  name: 'ModalPopup',
  methods: {
    deleteHouse() {
      this.$emit('delete-house')
    },
    closeModal() {
      this.$emit('close-modal')
    }
  }
}
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal-overlay p {
  line-height: 1.5;
  margin-bottom: 30px;
}

.modal-content {
  background: #fff;
  width: 500px;
  padding: 60px;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.go-back-button,
.delete-button {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  padding: 15px 30px 15px 30px;
  margin: 20px;
  cursor: pointer;
}

.delete-button {
  background-color: #eb5440;
}

.go-back-button {
  background-color: #4a4b4c;
}
@media only screen and (max-width: 768px) {
  .go-back-button,
  .delete-button {
    font-size: 12px;
    padding: 12px 30px 12px 30px;
  }
  .modal-content {
    background: #fff;
    width: 75%;
    padding: 30px;
    border-radius: 15px;
  }
  .modal-overlay p {
    font-size: 12px;
  }
}
</style>
