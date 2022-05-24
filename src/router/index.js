import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ShopView from '../views/ShopView.vue'
import ContactView from '../views/ContactView.vue'
import CartView from '../views/CartView.vue'
import LoginView from '../views/LoginView.vue'
import ProductTemplate from '../views/ProductTemplate.vue'
import FakeWeb from '../views/FakeWeb.vue'


const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/ShopView',
    name: 'Shop',
    component:ShopView
  },
  {path: '/ProductTemplate/:id',
    name: 'ProductTemplate',
    component: ProductTemplate
    // component: () =>
    //   import(
    //     /* webpackChunkName: "about" */ "../views/ProductTemplate.vue"
    //     // meta: {
    //     //   breadCrumb: "ProductItem", //crumb},
    //   ),
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

  {
    path: '/FakeWeb',
    name: 'fake',
    component:FakeWeb
  
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
