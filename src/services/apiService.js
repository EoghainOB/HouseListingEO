import axios from 'axios'

const baseURL = 'http://localhost:8080/houses'

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
  uploadImage(houseId, imageFile) {
    const formData = new FormData()
    formData.append('image', imageFile)
    return api.post(`/${houseId}/upload`, formData)
  },
  updateHouse(id, formData) {
    return api.post(`/${id}`, formData)
  },
  deleteHouse(id) {
    return api.delete(`/${id}`)
  }
}
