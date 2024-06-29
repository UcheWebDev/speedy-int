<template>
  <div class="notifications-page">
    <div class="container">
      <div class="page-title-bar center">
        <router-link to="/rider-dashboard"> <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray" class="icon"></router-link>
        <strong class="large">Notifications</strong>
      </div>
      <NoNotificationComponent/>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import NotificationComponent from "@/components/NotificationComponent.vue";
import NoNotificationComponent from "@/components/NoNotificationComponent.vue";
export default defineComponent({
  name : 'NoNotificationView',
  components: {NoNotificationComponent}
})

</script>