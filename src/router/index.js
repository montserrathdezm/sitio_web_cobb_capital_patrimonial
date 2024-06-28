import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Arrendamiento_Puro',
    name: 'Arrendamiento Puro',
    component: () => import( '../views/ArrendamientoPuro.vue')
  },
  {
    path: '/Fondo_Personal',
    name: 'Fondo Personal',
    component: () => import('../views/FondoPersonal.vue')
  },
  {
    path: '/Autofinanciamiento_Inmobiliario',
    name: 'Autofinanciamiento Inmobiliario',
    component: () => import( '../views/AutofinanciamientoInmobiliario.vue')
  },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
