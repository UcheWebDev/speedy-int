<template>
  <div class="profile-page">
    <div class="container" >
      <div class="page-title-bar center" >
        <router-link to="/rider-dashboard"> <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray" class="icon"></router-link>
        <strong class="large">Profile</strong>
      </div>
    </div>
    <div class="profile-update-wrapper">
      <div class="profile-pic">
        <a href="#"> <img src="../assets/images/icons/avatar-icon.svg" alt="avatar-icon" class="avatar-icon"></a>
      </div>
      <ul class="update-list">
        <li><div class="main-wrapper">
          <div class="name">
            <img src="../assets/images/icons/user-full-name-icon.svg" alt="user-full-name-icon">
            <span class="gray">Full name</span>
          </div>
          <span>Frederick Dozie</span>
        </div></li>
        <li><div class="main-wrapper">
          <div class="name">
            <img src="../assets/images/icons/phone-icon.svg" alt="user-full-name-icon">
            <span class="gray">Phone number</span>
          </div>
          <span>09034498770</span>
        </div></li>
        <li><div class="main-wrapper">
          <div class="name">
            <img src="../assets/images/icons/calendar-gray-icon.svg" alt="user-full-name-icon">
            <span class="gray">Rider since</span>
          </div>
          <span>29 April 2024</span>
        </div></li>
      </ul>
    </div>
    <div class="container">
      <div class="btn-wrapper">
          <a href="#" class="btn-style text full"><img src="../assets/images/icons/sign-out-icon.svg" alt="sign-out-icon"> Sign out</a>
          <a href="#" class="btn-style text full"><img src="../assets/images/icons/basket-icon.svg" alt="sign-out-icon"> Delete account</a>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name  : 'ProfileView'
})
</script>