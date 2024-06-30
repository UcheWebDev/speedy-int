<template>
  <div class="delivery-address-page user-profile-address-page">
    <div class="container">
      <div class="page-title-bar start">
        <router-link to="/user-profile">
          <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray">
        </router-link>
        <strong class="large">Address</strong>
      </div>
      <div class="search-bar">
        <input type="text" class="form-control" placeholder="Add address">
        <img src="../assets/images/icons/search-icon.png" alt="search-icon" class="search-icon">
      </div>
      <div class="searched-result-wrapper">
        <div class="address-search-main">
          <div class="searched-location">
            <img src="../assets/images/icons/location-pin-icon.png" alt="current-location-icon" class="location-icon">
            <div class="text">
              <strong>Port harcourt, Nigeria</strong>
              <span class="medium">Rumoroda, Port harcourt</span>
            </div>
          </div>
          <a href="#" class="basket-icon-btn"><img src="../assets/images/icons/basket-icon.svg" alt="basket-icon"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
export default defineComponent({
  name : 'UserProfileAddress'
})
</script>