<template>
  <div class="notification-wrapper">
    <div class="row">
      <div class="col-8">
        <div class="main-wrapper">
          <div class="icon-wrapper">
            <img src="../assets/images/icons/left-arrow-orange.png" alt="left-arrow-orange" class="arrow-icon">
          </div>
          <div class="text-wrapper">
            <strong>You have a new delivery order</strong>
            <p class="gray">Order 239810 needs delivery  </p>
            <span class="gray">27 May, 2024 . 12:30pm</span>
          </div>
        </div>
      </div>
      <div class="col-4 text-end">
        <router-link to="/no-notification" class="btn-style text">View <img src="../assets/images/icons/right-arrow-pink.png" alt="right-arrow-pink"></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'NotificationComponent'
})
</script>