<template>
  <div class="no-notification-main-wrapper">
    <div class="no-notification">
      <div class="icon-wrapper">
        <img src="../assets/images/icons/bell-icon-large.png" alt="bell-icon-large" class="bell-icon-large">
      </div>
      <p>No notifications for you</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name : 'NoNotificationComponent'
})
</script>