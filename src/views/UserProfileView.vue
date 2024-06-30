<template>
  <div class="user-profile-page detail-pages">
    <div class="container">
      <div class="page-title-bar start">
        <a href="#">
          <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray">
        </a>
        <strong class="large">Profile</strong>
      </div>
    </div>
    <div class="profile-update-wrapper">
      <div class="profile-pic">
        <a href="#"> <img src="../assets/images/icons/avatar-icon.svg" alt="avatar-icon" class="avatar-icon"></a>
      </div>
      <ul class="update-list">
        <li>
          <router-link to="/user-profile-detail" class="name">
            <img src="../assets/images/icons/user-profile-circle-icon.svg" alt="user-full-name-icon">
            <p class="medium">Profile Details</p>
          </router-link></li>
        <li>
          <router-link to="/user-profile-address" class="name">
            <img src="../assets/images/icons/user-profile-address-icon.svg" alt="user-full-name-icon">
            <p class="medium">Addresses</p>
        </router-link></li>
        <li>
          <router-link to="/favourite-items" class="name">
            <img src="../assets/images/icons/user-profile-favourite-icon.svg.svg" alt="user-full-name-icon">
            <p class="medium">Favourites</p>
        </router-link></li>
        <li>
          <a href="#" class="name">
            <img src="../assets/images/icons/user-profile-help-icon.svg.svg" alt="user-full-name-icon">
            <p class="medium">Help</p>
        </a></li>
      </ul>
    </div>
    <div class="container">
      <div class="btn-wrapper">
        <a href="#" class="btn-style text full"><img src="../assets/images/icons/sign-out-icon.svg" alt="sign-out-icon"> Sign out</a>
        <a href="#" class="btn-style text full"><img src="../assets/images/icons/basket-icon.svg" alt="sign-out-icon"> Delete account</a>
      </div>
    </div>
    <BottomMenu/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BottomMenu from "@/components/BottomMenu.vue";
export default defineComponent({
  name : 'UserProfileView',
  components: {BottomMenu}
})
</script>