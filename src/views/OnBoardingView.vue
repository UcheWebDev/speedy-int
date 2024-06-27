<template>
  <div class="on-boarding-view">
    <div class="img-wrapper">
    </div>
    <div class="onboarding-content">
      <div class="container">
        <div class="content-wrapper">
        <img src="../assets/images/on-boarding-img.png" alt="on-boarding-img" class="on-boarding-img">
          <div class="text">
            <h3 class="white">All in One Convenience</h3>
            <p>Your all-in-one solution for fast and reliable services, experience convenience like never before</p>
          </div>
          <div class="arrow-btn">
            <RouterLink to="/sign-up" class="btn-div">
              <img src="../assets/images/icons/right-arrow.png" alt="right-arrow" class="right-arrow">
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'OnBoardingView'
})
</script>