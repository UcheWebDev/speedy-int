<template>
  <div class="address-map-page">
    <router-link to="/delivery-address">
      <img src="../assets/images/icons/back-arrow-dark-gray.png" alt="back-arrow-dark-gray" class="back-arrow-dark-gray">
    </router-link>
    <div class="map-wrapper">
      <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
          width="100%" frameborder="0" style="border:0"></iframe>
    </div>
    <div class="searched-result-map">
      <div class="container">
        <div class="search-bar">
          <input type="text" class="form-control" placeholder="Enter your delivery address">
          <img src="../assets/images/icons/search-icon.png" alt="search-icon" class="search-icon">
        </div>
        <div class="searched-result-main-wrapper">
          <div class="searched-result-wrapper">
            <div class="searched-location">
              <img src="../assets/images/icons/location-pin-icon.png" alt="current-location-icon" class="location-icon">
              <div class="text">
                <strong>Port harcourt, Nigeria</strong>
                <span class="medium">Rumoroda, Port harcourt</span>
              </div>
            </div>
          </div>
        </div>
        <router-link to="/add-address" class="btn-style full">Confirm location</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'AddressMap'
})
</script>