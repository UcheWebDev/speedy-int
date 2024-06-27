<template>
  <div class="login-page">
    <TopBar/>
    <div class="container">
      <div class="login-inner">
        <div class="text-wrapper">
          <h3>Login</h3>
          <p class='medium bold'>Don't have an account? <span class="pink"><RouterLink to="/sign-up">Register</RouterLink></span></p>
        </div>
        <div class="form-wrapper">
          <form action="#" class="form">
            <div class="form-group">
              <label for="#">Phone number<sup>*</sup></label>
              <input type="text" class="form-control" placeholder="08012345678">
            </div>
            <div class="btn-wrapper">
              <a href="#" class="btn-style full form-btn">Login</a>
              <a href="#" class="btn-style full form-btn gray">Login as a rider</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import TopBar from "@/components/TopBar.vue";

export default defineComponent({
  name : 'LoginView',
  components: {TopBar}
})
</script>