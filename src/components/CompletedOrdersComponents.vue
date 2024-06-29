<template>
    <div class="order-detail-wrapper complete">
      <router-link to="/order-detail">
        <div class="order-id">
          <p class="gray">Order ID:<span class="black"> 239810</span></p>
          <div class="order-status">
            <span>Completed</span>
          </div>
        </div>
        <div class="from">
          <img src="../assets/images/icons/target-green-icon.png" alt="target-green-icon" class='location-icon'>
          <p>Michael garden restaurant - PP</p>
          <img src="../assets/images/icons/horizontal-three-dots.png" alt="horizontal-three-dots" class='horizontal-three-dots'>
        </div>
        <div class="to">
          <img src="../assets/images/icons/location-pin-icon-2.png" alt="target-green-icon" class='location-icon'>
          <p>70 Chinda Road, off Ada-George Road.</p>
        </div>
      </router-link>
    </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name : 'CompletedOrdersComponent',
})

</script>