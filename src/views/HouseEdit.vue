<template>
  <BackOverview />
  <div>
    <div class="sectionTitle"><h1>Edit listing</h1></div>
  </div>
  <form @submit.prevent="updateHouse" enctype="multipart/form-data">
    <div>
      <label>Street name*</label>
      <input
        name="streetName"
        type="text"
        placeholder="Enter the street name"
        v-model="formData.streetName"
        :class="{ required: showError('streetName') }"
        @input="clearError('streetName')"
      />
      <span v-if="showError('streetName')" class="error-text"
        ><h3>Required field missing.</h3></span
      >
    </div>
    <div class="inputsFlex">
      <div>
        <label>House number*</label>
        <input
          name="houseNumber"
          type="number"
          placeholder="Enter house number"
          v-model="formData.houseNumber"
          :class="{ required: showError('houseNumber') }"
          @input="clearError('houseNumber')"
        />
        <span v-if="showError('houseNumber')" class="error-text"
          ><h3>Required field missing.</h3></span
        >
      </div>
      <div>
        <label>Addition (optional)</label>
        <input
          name="numberAddition"
          type="text"
          placeholder="e.g. A"
          v-model="formData.numberAddition"
        />
      </div>
    </div>
    <div>
      <label>Postal code*</label>
      <input
        name="zip"
        type="text"
        placeholder="e.g. 1000 AA"
        v-model="formData.zip"
        :class="{ required: showError('zip') }"
        @input="clearError('zip')"
      />
      <span v-if="showError('zip')" class="error-text"><h3>Required field missing.</h3></span>
    </div>
    <div>
      <label>City*</label>
      <input
        name="city"
        type="text"
        placeholder="e.g. Utrecht"
        v-model="formData.city"
        :class="{ required: showError('city') }"
        @input="clearError('city')"
      />
      <span v-if="showError('city')" class="error-text"><h3>Required field missing.</h3></span>
    </div>
    <div>
      <div class="currentImage">
        <label>Current Image*</label>
        <div>
          <img v-if="formData.image" :src="formData.image" alt="Current Image" />
        </div>
      </div>
      <label>Upload picture (PNG or JPG)*</label>
      <input name="image" type="file" @change="handleImageUpload" ref="imageInput" required />
    </div>
    <div>
      <label>Price*</label>
      <input
        name="price"
        type="number"
        placeholder="e.g. €150.000"
        v-model="formData.price"
        :class="{ required: showError('price') }"
        @input="clearError('price')"
      />
      <span v-if="showError('price')" class="error-text"><h3>Required field missing.</h3></span>
    </div>
    <div class="inputsFlex">
      <div class="sizeInput">
        <label>Size*</label>
        <input
          name="size"
          type="text"
          placeholder="e.g. 60m2"
          v-model="formData.size"
          :class="{ required: showError('size') }"
          @input="clearError('size')"
        />
        <span v-if="showError('size')" class="error-text"><h3>Required field missing.</h3></span>
      </div>
      <div class="dropdown">
        <label>Garage*</label>
        <select
          name="hasGarage"
          v-model="formData.hasGarage"
          :class="{ required: showError('hasGarage') }"
          @input="clearError('hasGarage')"
        >
          <option value="" disabled selected>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <span v-if="showError('hasGarage')" class="error-text"
          ><h3>Required field missing.</h3></span
        >
      </div>
    </div>
    <div class="inputsFlex">
      <div>
        <label>Bedrooms*</label>
        <input
          name="bedrooms"
          type="number"
          placeholder="Enter amount"
          v-model="formData.bedrooms"
          :class="{ required: showError('bedrooms') }"
          @input="clearError('bedrooms')"
        />
        <span v-if="showError('bedrooms')" class="error-text"
          ><h3>Required field missing.</h3></span
        >
      </div>
      <div>
        <label>Bathrooms*</label>
        <input
          name="bathrooms"
          type="number"
          placeholder="Enter amount"
          v-model="formData.bathrooms"
          :class="{ required: showError('bathrooms') }"
          @input="clearError('bathrooms')"
        />
        <span v-if="showError('bathrooms')" class="error-text"
          ><h3>Required field missing.</h3></span
        >
      </div>
    </div>
    <div>
      <label>Construction year*</label>
      <input
        name="constructionYear"
        type="number"
        placeholder="e.g. 1990"
        v-model="formData.constructionYear"
        :class="{ required: showError('constructionYear') }"
        @input="clearError('constructionYear')"
      />
      <span v-if="showError('constructionYear')" class="error-text"
        ><h3>Required field missing.</h3></span
      >
    </div>
    <div>
      <label>Description*</label>
      <input
        name="description"
        type="text"
        placeholder="Enter description"
        v-model="formData.description"
        :class="{ required: showError('description') }"
        @input="clearError('description')"
      />
      <span v-if="showError('description')" class="error-text"
        ><h3>Required field missing.</h3></span
      >
    </div>
    <div class="submit">
      <button class="postButton" type="submit">POST</button>
    </div>
  </form>
</template>

<script>
import apiService from '@/services/apiService'
import BackOverview from '@/components/backOverview.vue'

export default {
  name: 'HouseEdit',
  components: { BackOverview },
  data() {
    return {
      houseId: null,
      formData: {
        price: null,
        bedrooms: null,
        bathrooms: null,
        size: null,
        streetName: '',
        houseNumber: null,
        numberAddition: '',
        zip: '',
        city: '',
        constructionYear: null,
        hasGarage: null,
        description: ''
      },
      errors: {}
    }
  },
  created() {
    this.houseId = this.$route.query.houseId

    if (this.houseId) {
      apiService
        .getHouseById(this.houseId)
        .then((response) => {
          const houseData = response.data[0]
          this.formData = {
            streetName: houseData.location.street,
            houseNumber: houseData.location.houseNumber,
            numberAddition: houseData.location.numberAddition,
            zip: houseData.location.zip,
            city: houseData.location.city,
            price: houseData.price,
            size: houseData.size,
            hasGarage: houseData.hasGarage ? 'true' : 'false',
            bedrooms: houseData.rooms.bedrooms,
            bathrooms: houseData.rooms.bathrooms,
            constructionYear: houseData.constructionYear,
            description: houseData.description,
            image: houseData.image
          }
        })
        .catch((error) => {
          console.error('Error fetching house details:', error)
        })
    }
  },
  methods: {
    async updateHouse() {
      this.clearError('image')
      if (!this.$refs.imageInput.checkValidity()) {
        this.errors.image = true
      }

      if (this.isFormValid() && !this.errors.image) {
        try {
          console.log(this.formData)
          console.log(this.houseId)
          const response = await apiService.updateHouse(this.houseId, this.formData)
          const houseId = response.data.id

          const imageInput = this.$refs.imageInput
          const imageFile = imageInput.files[0]

          if (imageFile) {
            const imageUploadResponse = await apiService.uploadImage(houseId, imageFile)
            console.log('Image uploaded:', imageUploadResponse.data)
          }
          this.$router.push(`/house/${houseId}`)
        } catch (error) {
          console.error('Error creating house:', error)
        }
      }
    },
    handleImageUpload() {
      this.clearError('image')
      const imageInput = this.$refs.imageInput
      if (!imageInput.files[0]) {
        this.errors.image = true
      }
    },
    isFormValid() {
      this.errors = {}
      let isValid = true

      if (!this.formData.streetName) {
        this.errors.streetName = true
        isValid = false
      }
      if (!this.formData.houseNumber) {
        this.errors.houseNumber = true
        isValid = false
      }
      if (!this.formData.zip) {
        this.errors.zip = true
        isValid = false
      }
      if (!this.formData.city) {
        this.errors.city = true
        isValid = false
      }
      if (!this.formData.price) {
        this.errors.price = true
        isValid = false
      }
      if (!this.formData.size) {
        this.errors.size = true
        isValid = false
      }
      if (!this.formData.hasGarage) {
        this.errors.hasGarage = true
        isValid = false
      }
      if (!this.formData.bedrooms) {
        this.errors.bedrooms = true
        isValid = false
      }
      if (!this.formData.bathrooms) {
        this.errors.bathrooms = true
        isValid = false
      }
      if (!this.formData.constructionYear) {
        this.errors.constructionYear = true
        isValid = false
      }
      if (!this.formData.description) {
        this.errors.description = true
        isValid = false
      }
      return isValid
    },
    showError(fieldName) {
      return this.errors[fieldName]
    },
    clearError(fieldName) {
      this.errors[fieldName] = false
    }
  }
}
</script>
<style scoped>
label {
  font-size: 14px;
}
form {
  max-width: 450px;
}
input {
  width: 96%;
  background-color: #ffffff;
  height: 48px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 15px;
}
select {
  background-color: #ffffff;
  height: 50px;
  border: none;
  font-size: 14px;
  font-weight: 400;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 15px;
  padding-left: 15px;
}
.inputsFlex {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.sizeInput {
  width: 48%;
}
.dropdown {
  width: 48%;
}
.inputsFlex select {
  width: 100%;
}
.inputsFlex input {
  width: 92%;
}
.postButton {
  background-color: #eb5440;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  padding: 15px 30px 15px 30px;
  width: 40%;
}
.submit {
  margin-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-content: end;
}
.submit button {
  border: none;
}
.required {
  border: 2px solid #eb5440;
}
.error-text h3 {
  font-size: 14px;
  font-weight: 300;
  font-style: italic;
  color: #eb5440;
  margin-bottom: 15px;
}
.currentImage img {
  width: 170px;
  height: 170px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 10px;
}
</style>
