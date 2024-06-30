import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import OnBoardingView from "@/views/OnBoardingView.vue";
import SignUp from "@/views/SignUp.vue";
import LoginView from "@/views/LoginView.vue";
import VerifyAccount from "@/views/VerifyAccount.vue";
import DeliveryAddress from "@/views/DeliveryAddress.vue";
import AddressMap from "@/views/AddressMap.vue";
import AddAddressDetail from "@/views/AddAddressDetail.vue";
import RiderLogin from "@/views/RiderLogin.vue";
import RiderDashboard from "@/views/RiderDashboard.vue";
import OrderDetail from "@/views/OrderDetail.vue";
import NotificationsView from "@/views/NotificationsView.vue";
import NoNotificationComponent from "@/components/NoNotificationComponent.vue";
import NoNotificationView from "@/views/NoNotificationView.vue";
import ProfileView from "@/views/ProfileView.vue";
import OrderStatusView from "@/views/OrderStatusView.vue";
import AddDeliveryAddress from "@/views/AddDeliveryAddress.vue";
import SearchItemView from "@/views/SearchItemView.vue";
import NoSearchView from "@/views/NoSearchView.vue";
import RecentSearchView from "@/views/RecentSearchView.vue";
import ItemOrderView from "@/views/ItemOrderView.vue";
import ItemOrderDetailPage from "@/views/ItemOrderDetailPage.vue";
import UserProfileView from "@/views/UserProfileView.vue";
import UserProfileDetail from "@/views/UserProfileDetail.vue";
import FavouriteItemView from "@/views/FavouriteItemView.vue";
import UserProfileAddress from "@/views/UserProfileAddress.vue";

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
    path: '/rider-login',
    name: 'rider-login',
    component: RiderLogin
  },
  {
    path: '/rider-dashboard',
    name: 'rider-dashboard',
    component: RiderDashboard
  },
  {
    path: '/order-detail',
    name: 'order-detail',
    component: OrderDetail,
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView,
  },
  {
    path: '/no-notification',
    name: 'no-notifications',
    component: NoNotificationView,
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/order-status',
    name: 'order-status',
    component: OrderStatusView,
  },
  {
    path: '/add-delivery-address',
    name: 'add-delivery-address',
    component: AddDeliveryAddress,
  },
  {
    path: '/search-item',
    name: 'search-item',
    component: SearchItemView,
  },
  {
    path: '/no-search',
    name: 'no-search',
    component: NoSearchView,
  },
  {
    path: '/recent-search',
    name: 'recent-search',
    component: RecentSearchView,
  },
  {
    path: '/item-order',
    name: 'item-order',
    component: ItemOrderView,
  },
  {
    path: '/item-order-detail',
    name: 'item-order-detail',
    component: ItemOrderDetailPage,
  },
  {
    path: '/user-profile',
    name: 'user-profile',
    component: UserProfileView,
  },
  {
    path: '/user-profile-detail',
    name: 'user-profile-detail',
    component: UserProfileDetail,
  },
  {
    path: '/favourite-items',
    name: 'favourite-items',
    component: FavouriteItemView,
  },
  {
    path: '/user-profile-address',
    name: 'user-profile-address',
    component: UserProfileAddress,
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
