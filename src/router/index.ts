import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnBoardingView from "@/views/OnBoardingView.vue";
import SignUp from "@/views/SignUp.vue";
import LoginView from "@/views/LoginView.vue";
import VerifyAccount from "@/views/VerifyAccount.vue";
import DeliveryAddress from "@/views/DeliveryAddress.vue";
import AddressMap from "@/views/AddressMap.vue";
import AddAddressDetail from "@/views/AddAddressDetail.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/on-boarding',
    name: 'on-boarding',
    component: OnBoardingView
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/verify-account',
    name: 'verify-account',
    component: VerifyAccount
  },
  {
    path: '/delivery-address',
    name: 'delivery-address',
    component: DeliveryAddress
  },
  {
    path: '/address-map',
    name: 'address-map',
    component: AddressMap
  },
  {
    path: '/add-address',
    name: 'add-address',
    component: AddAddressDetail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
