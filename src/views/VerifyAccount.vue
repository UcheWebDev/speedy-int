<template>
  <div class="verify-account-page">
    <div class="container">
      <div class="back-top-bar">
        <router-link to="/login">
          <img src="../assets/images/icons/left-arrow.png" alt="left-arrow" class='left-arrow'>
          <strong>Back</strong>
        </router-link>
      </div>
      <div class="verify-code-wrapper">
        <div class="content-wrapper">
          <h3 class="h3">Verify your account</h3>
          <p class="gray bold medium">Please enter the 4 digit code we sent via SMS <br> to your number</p>
          <strong>08012345678</strong>
          <form class="code-boxes form">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
            <input type="text" class="form-control">
          </form>
          <p class="gray p bold">Didn’t receive code? <a href="#" class="pink">Resend in 59s</a></p>
          <a href="#" class="btn-style full verify-btn">Verify my account</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import {defineComponent} from "vue";
export default defineComponent({
  name : 'VerifyAccount',
})
</script>