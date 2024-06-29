<template>
  <div class="order-status-page">
    <div class="container">
      <div class="img-wrapper text-center">
        <img src="../assets/images/status-order-img.png" alt="status-order-img" class="status-order-img">
      </div>
      <div class="content-wrapper">
        <h3>Know the status of your order</h3>
        <p class="medium">Stay informed! Order updates delivered through push notifications. Change in Settings</p>
        <div class="btn-wrapper">
          <a href="#" class="btn-style full">Enable push notifications</a>
          <router-link to="/" class="btn-style text full">Skip for now</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name : 'OrderStatusView'
})
</script>