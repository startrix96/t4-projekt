import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ShopView',
    name: 'Shop',
    component:ShopView
  },
  {
    path: '/ContactView',
    name: 'contact',
    component:ContactView
  },
  {
    path: '/CartView',
    name: 'cart',
    component:CartView  
  },

  {
    path: '/LoginView',
    name: 'login',
    component:LoginView
  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
