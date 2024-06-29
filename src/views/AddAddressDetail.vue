<template>
  <div class="add-address-detail-page">
    <div class="container">
      <div class="page-title-bar">
        <a href="#">
          <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray" class="icon">
        </a>
        <strong class="large">Add address details</strong>
      </div>
      <div class="map-wrapper">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
            width="100%" frameborder="0" style="border:0" height="160px"></iframe>
      </div>
      <div class="address-detail-wrapper">
        <div class="text">
          <strong>Port harcourt, Nigeria</strong>
          <span class="medium">Rumoroda, Port harcourt</span>
        </div>
        <form action="#" class="form">
          <div class="form-group">
            <label for="Floor">Floor number</label>
            <input type="text" class="form-control" id="Floor" placeholder="24">
          </div>
          <div class="form-group">
            <label for="Floor">Door number</label>
            <input type="text" class="form-control" id="Floor" placeholder="11">
          </div>
          <div class="form-group">
            <label for="Floor">Contact number</label>
            <input type="text" class="form-control" id="Floor" placeholder="08012345678">
          </div>
          <div class="form-group">
            <label for="Floor">Additional information</label>
            <input type="text" class="form-control" id="Floor" placeholder="Information">
          </div>
          <div class="form-group">
            <label for="Floor">Address type</label>
            <div class="select-address-type">
              <div class="select-label">
                <input type="radio" id="home" name="address">
                <label for="home"><img src="../assets/images/icons/home-icon.png" alt="home-icon"> Home</label>
              </div>
              <div class="select-label">
                <input type="radio" id="office" name="address">
                <label for="office"><img src="../assets/images/icons/office-icon.png" alt="home-icon"> Office/Work</label>
              </div>
              <div class="select-label">
                <input type="radio" id="Others" name="address">
                <label for="Others"><img src="../assets/images/icons/plane-icon.png" alt="home-icon"> Others</label>
              </div>
            </div>
          </div>
        </form>
        <div class="btn-wrapper">
          <a href="#" class="btn-style full">Add address</a>
          <a href="#" class="btn-style gray full">Cancel</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name: 'AddAddressDetail'
})

</script>