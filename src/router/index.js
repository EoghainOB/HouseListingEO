import { createRouter, createWebHistory } from 'vue-router'
import HouseList from '@/views/HouseList.vue'
import AboutUs from '@/views/AboutUs.vue'
import HouseDetail from '@/views/HouseDetail.vue'
import HouseCreate from '@/views/HouseCreate.vue'
import HouseEdit from '@/views/HouseEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HouseList',
      component: HouseList
    },
    {
      path: '/about',
      name: 'AboutUs',
      component: AboutUs
    },
    {
      path: '/house/:houseId',
      name: 'HouseDetail',
      component: HouseDetail
    },
    {
      path: '/house/create',
      name: 'HouseCreate',
      component: HouseCreate
    },
    {
      path: '/house/edit',
      name: 'HouseEdit',
      component: HouseEdit
    }
  ],
  // Jump to top of page when navigating
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
