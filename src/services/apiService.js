import axios from 'axios'

const baseURL = 'http://localhost:8080/houses'
const cloudinaryUploadURL = 'https://api.cloudinary.com/v1_1/dotzk2hkd/image/upload'

const api = axios.create({
  baseURL
})

export default {
  getHouses() {
    return api.get('/')
  },

  getHouseById(id) {
    return api.get(`/${id}`)
  },

  async createHouse(formData) {
    const latestHouse = await api.get('/')
    const data = latestHouse.data
    const length = data.length

    const latestId = length > 0 ? data[length - 1].id : 0
    const newId = latestId + 1

    const updatedForm = {
      id: newId,
      image: formData.image,
      price: formData.price,
      rooms: {
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms
      },
      size: formData.size,
      description: formData.description,
      location: {
        street: formData.street,
        houseNumber: formData.houseNumber,
        houseNumberAddition: formData.houseNumberAddition,
        city: formData.city,
        zip: formData.zip
      },
      constructionYear: formData.constructionYear,
      hasGarage: formData.hasGarage,
      createdAt: new Date().toISOString().split('T')[0],
      madeByMe: true
    }
    return api.post('/', updatedForm)
  },

  updateHouse(id, formData) {
    const updatedForm = {
      image: formData.image,
      price: formData.price,
      rooms: {
        bedrooms: formData.bedrooms,
        bathrooms: formData.bathrooms
      },
      size: formData.size,
      description: formData.description,
      location: {
        street: formData.street,
        houseNumber: formData.houseNumber,
        houseNumberAddition: formData.houseNumberAddition,
        city: formData.city,
        zip: formData.zip
      },
      constructionYear: formData.constructionYear,
      hasGarage: formData.hasGarage
    }
    return api.put(`/${id}`, updatedForm)
  },

  deleteHouse(id) {
    return api.delete(`/${id}`)
  },

  async uploadImage(imageFile) {
    const formData = new FormData()
    formData.append('file', imageFile)
    formData.append('upload_preset', 'w2iaupso')
    try {
      const fetched = await fetch(cloudinaryUploadURL, {
        method: 'post',
        body: formData
      })

      const parsed = await fetched.json()
      const imageUrl = parsed.secure_url
      return imageUrl
    } catch (error) {
      console.error('Error uploading image to Cloudinary:', error)
      throw error
    }
  }
}
