import axios from 'axios'

const baseURL = 'https://api.intern.d-tt.nl/api/houses'

const api = axios.create({
  baseURL,
  headers: {
    'X-Api-Key': 'D1FC8mrHuyO34ljfBMYcsvP2nWX_ekaS',
    'Content-Type': 'multipart/form-data'
  }
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
