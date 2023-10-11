import { createRouter, createWebHistory } from 'vue-router'
import HouseList from '@/views/HouseList.vue'

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
      component: () => import('@/views/AboutUs.vue')
    },
    {
      path: '/house/:houseId',
      name: 'HouseDetail',
      component: () => import('@/views/HouseDetail.vue')
    },
    {
      path: '/house/create',
      name: 'HouseCreate',
      component: () => import('@/views/HouseCreate.vue')
    },
    {
      path: '/house/edit',
      name: 'HouseEdit',
      component: () => import('@/views/HouseEdit.vue')
    }
  ]
})

export default router
