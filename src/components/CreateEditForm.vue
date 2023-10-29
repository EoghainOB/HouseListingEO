<template>
  <form @submit.prevent="submitForm" enctype="multipart/form-data">
    <!-- Input fields for address information -->

    <div>
      <label for="streetName">Street name*</label>
      <input
        id="streetName"
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
    <div class="inputs-flex">
      <div>
        <label for="houseNumber">House number*</label>
        <input
          id="houseNumber"
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
        <label for="numberAddition">Addition (optional)</label>
        <input
          id="numberAddition"
          name="numberAddition"
          type="text"
          placeholder="e.g. A"
          v-model="formData.numberAddition"
        />
      </div>
    </div>
    <div>
      <label for="zip">Postal code*</label>
      <input
        id="zip"
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
      <label for="city">City*</label>
      <input
        id="city"
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
      <label>Upload picture (PNG or JPG)*</label>
      <div class="image-thumbnail" v-if="formData.image && !imagePreview">
        <div class="clear-button" @click="showUploader">
          <img src="@/assets/icons/ic_clear_white@3x.png" alt="Clear" />
        </div>
        <div class="current-image">
          <img :src="formData.image" alt="Current Image" />
        </div>
      </div>
      <div class="image-thumbnail" v-if="imagePreview">
        <div class="clear-button" @click="showUploader">
          <img src="@/assets/icons/ic_clear_white@3x.png" alt="Clear" />
        </div>
        <div class="current-image">
          <img :src="imagePreview" alt="Image Preview" />
        </div>
      </div>

      <div class="uploader" v-if="!formData.image && !imagePreview">
        <div class="file-upload">
          <label for="imageInput">
            <img src="@/assets/icons/ic_upload@3x.png" alt="Upload Image" />
            <input
              id="imageInput"
              name="image"
              type="file"
              @change="handleImageUpload"
              ref="imageInput"
              :class="{ required: errors.image }"
            />
          </label>
        </div>
      </div>
      <span v-if="showError('image')" class="error-text"><h3>Required field missing.</h3></span>
    </div>

    <div>
      <label for="price">Price*</label>
      <input
        id="price"
        name="price"
        type="number"
        placeholder="e.g. €150.000"
        v-model="formData.price"
        :class="{ required: showError('price') }"
        @input="clearError('price')"
      />
      <span v-if="showError('price')" class="error-text"><h3>Required field missing.</h3></span>
    </div>
    <div class="inputs-flex">
      <div class="size-input">
        <label for="size">Size*</label>
        <input
          id="size"
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
        <label for="hasGarage">Garage*</label>
        <select
          id="hasGarage"
          name="hasGarage"
          v-model="formData.hasGarage"
          :class="{ required: showError('hasGarage') }"
          @change="clearErrorForHasGarage"
        >
          <option value="">Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
        <span v-if="showError('hasGarage')" class="error-text"
          ><h3>Required field missing.</h3></span
        >
      </div>
    </div>
    <div class="inputs-flex">
      <div>
        <label for="bedrooms">Bedrooms*</label>
        <input
          id="bedrooms"
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
        <label for="bathrooms">Bathrooms*</label>
        <input
          id="bathrooms"
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
      <label for="constructionYear">Construction year*</label>
      <input
        id="constructionYear"
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
      <label for="description">Description*</label>
      <textarea
        id="description"
        name="description"
        placeholder="Enter description"
        v-model="formData.description"
        :class="{ required: showError('description') }"
        @input="clearError('description')"
        style="resize: none"
      ></textarea>
      <span v-if="showError('description')" class="error-text"
        ><h3>Required field missing.</h3></span
      >
    </div>

    <div class="submit">
      <button class="post-button" type="submit">{{ buttonText }}</button>
    </div>
  </form>
</template>

<script>
import apiService from '@/services/apiService'

export default {
  name: 'CreateEditForm',
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
        description: '',
        image: ''
      },
      errors: {},
      isEditPage: false,
      imagePreview: null
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

      // Check the validity of the image input element, and if it's not valid, set an error flag for image
      if (
        !this.formData.image ||
        (this.$refs.imageInput && !this.$refs.imageInput.checkValidity())
      ) {
        this.errors.image = true
      }
      if (this.isFormValid()) {
        // If the entire form is valid, proceed to handle form submission
        const imageFile = this.formData.image
        try {
          let response
          if (this.isEditPage) {
            // If the form is in edit mode, update the existing property listing
            if (imageFile) {
              // If a new image is selected, upload it
              await apiService.uploadImage(this.houseId, imageFile)
            }
            response = await apiService.updateHouse(this.houseId, this.formData)
            this.$router.push(`/house/${this.houseId}`)
          } else {
            // If the form is not in edit mode, create a new property listing
            if (imageFile) {
              response = await apiService.createHouse(this.formData)
              const houseId = response.data.id
              await apiService.uploadImage(houseId, imageFile)
              this.$router.push(`/house/${houseId}`)
            } else {
              console.error('Image is required for creating a new house listing')
            }
          }
        } catch (error) {
          console.error('Error processing form:', error)
        }
      }
    },
    clearErrorForHasGarage() {
      this.clearError('hasGarage')
    },
    showUploader() {
      this.formData.image = null
      this.imagePreview = null
    },
    handleImageUpload() {
      const imageInput = this.$refs.imageInput
      const imageFile = imageInput.files[0]

      if (!imageFile) {
        this.errors.image = true
      } else {
        this.errors.image = false
        const reader = new FileReader()
        reader.onload = (e) => {
          this.imagePreview = e.target.result
        }
        reader.readAsDataURL(imageFile)
        this.formData.image = imageFile
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
    // Function to check if an error should be displayed for a field
    showError(fieldName) {
      return this.errors[fieldName]
    },
    // Function to clear errors for a field
    clearError(fieldName) {
      this.errors[fieldName] = false
    }
  }
}
</script>

<style scoped>
.uploaded-image-preview {
  width: 140px;
  height: 140px;
  margin-top: 10px;
  border-radius: 10px;
  object-fit: cover;
}
label {
  font-size: 14px;
}
form {
  max-width: 450px;
}

input,
select,
textarea {
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
textarea {
  height: 150px;
  padding-top: 15px;
}
select:focus,
textarea:focus {
  outline: none;
}
.file-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 140px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 2px dashed #4a4b4c;
}
.file-upload img {
  height: 30px;
}
.inputs-flex {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}
.size-input {
  width: 48%;
}
input[type='file'] {
  display: none;
}
.dropdown {
  width: 48%;
}
.inputs-flex select {
  width: 100%;
}
.inputs-flex input {
  width: 92%;
}
.post-button {
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
.current-image img {
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  margin-top: 10px;
  margin-right: 10px;
}

.clear-button {
  position: relative;
  left: -35px;
  width: 40px;
}
.clear-button img {
  width: 100%;
}
.image-thumbnail {
  display: flex;
  flex-direction: row-reverse;
  width: fit-content;
}

@media only screen and (max-width: 768px) {
  input,
  select,
  label {
    font-size: 12px;
  }
  .post-button {
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
