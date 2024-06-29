<template>
  <div class="order-detail-page ">
    <div class="container">
      <div class="page-title-bar center">
        <router-link to="/rider-dashboard"> <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray" class="icon"></router-link>
        <strong class="large">Order details</strong>
      </div>
      <div class="order-detail-inner">
        <OrderDetailComponent/>
        <div class="receiver-info">
          <div class="name">
            <p class="gray medium">Receiver: </p>
            <p class="medium">Paschal Dozie</p>
          </div>
          <a href="#" class="btn-style full green"><img src="../assets/images/icons/phone-call-icon-white.png" alt="phone-call-icon-white"> Call receiver</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import OrderDetailComponent from "@/components/OrderDetailComponent.vue";

export default defineComponent({
  name  : 'OrderDetail',
  components: {OrderDetailComponent}
})

</script>