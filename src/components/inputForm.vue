<template>
  <form @submit.prevent="submitForm" enctype="multipart/form-data">
    <!-- Input fields for address information -->
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
      <!-- If in edit mode, display the current image -->
      <div v-if="isEditPage" class="currentImage">
        <label>Current Image*</label>
        <div>
          <img v-if="formData.image" :src="formData.image" alt="Current Image" />
        </div>
      </div>
      <label>Upload picture (PNG or JPG)*</label>
      <div class="fileUpload">
        <label for="imageInput">
          <img src="@/components/icons/ic_upload@3x.png" alt="Upload Image" />
        </label>
        <input
          id="imageInput"
          name="image"
          type="file"
          @change="handleImageUpload"
          ref="imageInput"
          :class="{ required: errors.image }"
        />
      </div>
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
          @change="clearErrorForHasGarage"
        >
          <option value="" disabled>Select</option>
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
      <button class="postButton" type="submit">{{ buttonText }}</button>
    </div>
  </form>
</template>

<script>
import apiService from '@/services/apiService'

export default {
  name: 'InputForm',
  props: {
    buttonText: {
      type: String
    }
  },
  data() {
    return {
      // Form data and validation errors
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
        hasGarage: '',
        description: ''
      },
      errors: {},
      isEditPage: false
    }
  },
  created() {
    // Load existing property data if in edit mode
    this.houseId = this.$route.query.houseId

    if (this.houseId) {
      this.isEditPage = true
      apiService
        .getHouseById(this.houseId)
        .then((response) => {
          const houseData = response.data[0]
          this.formData = {
            streetName: houseData.location.street,
            houseNumber: houseData.location.houseNumber,
            numberAddition: houseData.location.houseNumberAddition,
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
    // Function to handle form submission
    async submitForm() {
      // Clear any previous error related to image
      this.clearError('image')

      if (!this.formData.image) {
        this.errors.image = true
      }

      if (!this.$refs.imageInput.checkValidity()) {
        // Check the validity of the image input element, and if it's not valid, set an error flag for image
        this.errors.image = true
      }
      if (this.isFormValid()) {
        // If the entire form is valid, proceed to handle form submission
        const imageInput = this.$refs.imageInput
        const imageFile = imageInput.files[0]

        try {
          let response

          if (this.isEditPage) {
            // If the form is in edit mode, update the existing property listing
            if (imageFile) {
              // If a new image is selected, upload it
              const imageUploadResponse = await apiService.uploadImage(this.houseId, imageFile)
              console.log('Image uploaded:', imageUploadResponse.data)
            }
            response = await apiService.updateHouse(this.houseId, this.formData)
          } else {
            // If the form is not in edit mode, create a new property listing
            if (imageFile) {
              response = await apiService.createHouse(this.formData)
              const houseId = response.data.id
              const imageUploadResponse = await apiService.uploadImage(houseId, imageFile)
              console.log('Image uploaded:', imageUploadResponse.data)
              this.$router.push(`/house/${houseId}`)
            } else {
              console.error('Image is required for creating a new house listing')
            }
          }

          if (this.isEditPage) {
            // If it's an edit page, redirect to the updated property details page
            this.$router.push(`/house/${this.houseId}`)
          }
        } catch (error) {
          console.error('Error processing form:', error)
        }
      }
    },
    clearErrorForHasGarage() {
      this.clearError('hasGarage')
    },
    handleImageUpload() {
      // Function to handle image upload
      const imageInput = this.$refs.imageInput
      const imageFile = imageInput.files[0]

      this.formData.image = imageFile ? imageFile : null

      if (!this.formData.image) {
        this.errors.image = true
      } else {
        this.errors.image = false
      }
    },
    isFormValid() {
      // Function to validate the form data
      this.errors = {}
      let isValid = true

      const requiredFields = [
        'streetName',
        'houseNumber',
        'zip',
        'city',
        'price',
        'size',
        'hasGarage',
        'bedrooms',
        'bathrooms',
        'constructionYear',
        'description',
        'image'
      ]

      requiredFields.forEach((field) => {
        if (!this.formData[field]) {
          this.errors[field] = true
          isValid = false
        }
      })

      return isValid
    },
    showError(fieldName) {
      // Function to check if an error should be displayed for a field
      return this.errors[fieldName]
    },
    clearError(fieldName) {
      // Function to clear errors for a field
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
input,
select {
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
  height: 50px;
}
select:focus {
  outline: none;
}
.fileUpload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 125px;
  height: 125px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px dashed #4a4b4c;
}
.fileUpload img {
  height: 30px;
}
.inputsFlex {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.sizeInput {
  width: 48%;
}
input[type='file'] {
  display: none;
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
  cursor: pointer;
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
@media only screen and (max-width: 768px) {
  input,
  select,
  label {
    font-size: 12px;
  }
  .postButton {
    text-align: center;
    font-size: 12px;
    padding: 12px 70px 12px 70px;
    width: 100%;
  }
  .error-text h3 {
    font-size: 12px;
  }
  .submit {
    margin-top: 20px;
    padding-bottom: 10px;
  }
}
</style>
