<template>
  <div class="signup-page">
    <TopBar/>
    <div class="container">
      <div class="signup-inner">
        <div class="text-wrapper">
          <h3>Create your account</h3>
          <p class='medium bold'>Have an account? <span class="pink"><RouterLink to="/login">Login</RouterLink></span></p>
        </div>
        <div class="form-wrapper">
          <form action="#" class="form">
            <div class="form-group">
              <label for="#">Phone number<sup>*</sup></label>
              <input type="text" class="form-control" placeholder="08012345678">
            </div>
            <div class="form-group">
              <label for="#">Email address<sup>*</sup></label>
              <input type="text" class="form-control" placeholder="example@gmail.com">
            </div>
            <div class="form-group">
              <label for="#">First name<sup>*</sup></label>
              <input type="text" class="form-control" placeholder="amaka">
            </div>
            <div class="form-group">
              <label for="#">Last name<sup>*</sup></label>
              <input type="text" class="form-control" placeholder="anthony">
            </div>
            <div class="form-group">
              <label for="#">Birthday</label>
              <input type="text" class="form-control" placeholder="select month and day">
            </div>
            <div class="btn-wrapper">
              <a href="#" class="btn-style full form-btn">Create your account</a>
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
  name : 'SignUp',
  components: {TopBar}
})
</script>