<template>
  <div class="notifications-page">
    <div class="container">
      <div class="page-title-bar center">
        <router-link to="/rider-dashboard"> <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray" class="icon"></router-link>
        <strong class="large">Notifications</strong>
      </div>
    </div>
    <div class="notifications-main-wrapper">
      <NotificationComponent/>
      <NotificationComponent/>
      <NotificationComponent/>
      <NotificationComponent/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import NotificationComponent from "@/components/NotificationComponent.vue";
export default defineComponent({
  name : 'NotificationView',
  components: {NotificationComponent}
})

</script>