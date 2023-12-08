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
  createHouse(formData) {
    return api.post('/', formData)
  },
  updateHouse(id, formData) {
    return api.put(`/${id}`, formData)
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
