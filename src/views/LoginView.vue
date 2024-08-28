<template>
  <div class="login-page">
    <div class="container">
      <div class="login-inner">
        <div class="text-wrapper">
          <h3>Login</h3>
          <p class="medium bold">
            Don't have an account?
            <span class="pink">
              <RouterLink to="/sign-up">Register</RouterLink>
            </span>
          </p>
        </div>
        <div class="form-wrapper">
          <form @submit.prevent="doLogin" class="form">
            <div class="form-group">
              <label for="phone">Phone number<sup>*</sup></label>
              <input
                id="phone"
                type="text"
                class="form-control"
                placeholder="08012345678"
                v-model="phoneNumber"
                @focus="phoneError = ''"
              />
              <span class="error-msg medium" v-if="phoneError">
                {{ phoneError }}
              </span>
            </div>

            <div class="form-group">
              <label for="password">Password<sup>*</sup></label>
              <input
                id="password"
                type="password"
                class="form-control"
                placeholder="password"
                v-model="password"
                @focus="passwordError = ''"
              />
              <span class="error-msg medium" v-if="passwordError">
                {{ passwordError }}
              </span>
            </div>

            <div class="btn-wrapper">
              <button type="submit" class="btn-style full form-btn mb-2">
                <SpinButton v-if="isLoadingRequest" />
                <span v-else class="btn-text">Sign In</span>
              </button>

              <a href="#" class="btn-style full form-btn gray">
                Login as a rider
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CapacitorHttp } from "@capacitor/core";
import { Preferences } from "@capacitor/preferences";

import { ref } from "vue";
import { useRouter } from "vue-router";

import SpinButton from "@/components/SpinButton.vue";

const router = useRouter();

const phoneNumber = ref(null);
const password = ref(null);
const phoneError = ref(null);
const passwordError = ref(null);
const isLoadingRequest = ref(false);

const doLogin = async () => {
  isLoadingRequest.value = true;
  try {
    const payLoad = {
      phone: phoneNumber.value,
      password: password.value,
    };

    const options = {
      url: "http://speedy-api.test/api/v1/auth/loginCus",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: payLoad,
    };

    const response = await CapacitorHttp.post(options);
    isLoadingRequest.value = false;

    if (response.data.errors) {
      const errorData = response.data.errors;
      if (errorData.phone) {
        phoneError.value = errorData.phone[0];
      }
      if (errorData.password) {
        passwordError.value = errorData.password[0];
      }
      return;
    }

    if (response.data.invalid) {
      phoneError.value = response.data.invalid;
      return;
    }

    await Preferences.set({
      key: "token",
      value: response.data.token,
    });

    router.push("/customer");
  } catch (error) {
    isLoadingRequest.value = false;
    phoneError.value = "An unexpected error occurred.";
    passwordError.value = "An unexpected error occurred.";
  }
};
</script>

<style scoped>
.btn-text {
  color: #ffffff;
  cursor: pointer;
  border-radius: 5px;
  text-decoration: none;
  font-family: "Avenir";
  font-weight: 600;
  font-size: 14px;
}
</style>
