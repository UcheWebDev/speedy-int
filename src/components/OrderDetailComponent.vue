<template>
  <div class="order-all-detail-wrapper active">
    <router-link to="/order-detail">
      <div class="order-id">
        <div class="id-wrapper">
          <p class="medium bold">Order ID:<span class="black"> 239810</span></p>
          <span class="gray">27 May, 2024 12:30pm</span>
        </div>
        <div class="order-status">
          <span>Active</span>
        </div>
      </div>
      <div class="pick-up">
          <span class="light-gray">Pick up location</span>
        <div class="from">
          <img src="../assets/images/icons/target-green-icon.png" alt="target-green-icon" class='location-icon'>
          <p class="medium">Michael garden restaurant - PP</p>
          <img src="../assets/images/icons/horizontal-three-dots.png" alt="horizontal-three-dots" class='horizontal-three-dots'>
        </div>
      </div>
      <div class="drop">
        <span class="light-gray">Drop off location</span>
        <div class="to">
          <img src="../assets/images/icons/location-pin-icon-2.png" alt="target-green-icon" class='location-icon'>
          <p class="medium">70 Chinda Road, off Ada-George Road.</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name : 'OrderDetailComponent'
})
</script>