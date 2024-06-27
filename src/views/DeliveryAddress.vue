<template>
  <div class="delivery-address-page">
    <div class="container">
      <div class="page-title-bar">
        <strong class="large">Delivery address</strong>
        <img src="../assets/images/icons/cross-circle-icon.png" alt="cross-circle-icon" class="icon">
      </div>
      <div class="search-bar">
        <input type="text" class="form-control" placeholder="Enter your delivery address">
        <img src="../assets/images/icons/search-icon.png" alt="search-icon" class="search-icon">
      </div>
      <div class="searched-result-wrapper">
        <div class="searched-location">
            <img src="../assets/images/icons/current-location-icon.png" alt="current-location-icon" class="location-icon" style="width: 12px">
          <strong>Use current location</strong>
        </div>
        <div class="searched-location">
          <img src="../assets/images/icons/location-pin-icon.png" alt="current-location-icon" class="location-icon">
          <div class="text">
            <strong>Port harcourt, Nigeria</strong>
            <span class="medium">Rumoroda, Port harcourt</span>
          </div>
        </div>
        <div class="searched-location">
          <img src="../assets/images/icons/location-pin-icon.png" alt="current-location-icon" class="location-icon">
          <div class="text">
            <strong>Old GRA</strong>
            <span class="medium">Old GRA, Port harcourt, Nigeria</span>
          </div>
        </div>
        <div class="searched-location">
          <img src="../assets/images/icons/location-pin-icon.png" alt="current-location-icon" class="location-icon">
          <div class="text">
            <strong>Suncity gardens estate</strong>
            <span class="medium">Peter Odili Rd, Trans Amadi, Port Harcourt</span>
          </div>
        </div>
      </div>
      <div class="cannot-find-address">
        <div class="text-wrapper">
          <strong>Can’ find your address?</strong>
          <p class="bold"><router-link to="/address-map" class="pink">Use the map instead</router-link></p>
        </div>
        <div class="icon">
          <img src="../assets/images/icons/cannot-find-map.png" alt="cannot-find-map" class="cannot-find-map">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
export default defineComponent({
  name : 'DeliveryAddress'
})
</script>