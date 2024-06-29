<template>
  <div class="rider-login-page">
    <div class="container">
      <div class="page-title">
        <h3>Login</h3>
      </div>
      <form action="#" class="form">
        <div class="form-group">
          <label for="#">Email address <sup>*</sup></label>
          <input type="text" class="form-control" placeholder="example@gmail.com">
<!--          <span class="error-msg medium">Oops, doesn't match any account</span>-->
        </div>
        <div class="form-group">
          <label for="#">Password <sup>*</sup></label>
          <input type="password" class="form-control" placeholder="**********">
<!--          <span class="error-msg medium">Oops, doesn't match any account</span>-->
        </div>
        <div class="btn-wrapper">
          <a href="#" class="btn-style full form-btn">Login as a rider</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";

export default defineComponent({
  name : 'RiderLogin'
})
</script>