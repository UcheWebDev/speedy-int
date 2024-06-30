<template>
  <div class="bottom-menu">
    <ul class="menu">
      <li class="active">
        <router-link to="/" class="item">
          <img src="../assets/images/icons/home-icon.svg" alt="home-icon">
          <p class="medium">Home</p>
        </router-link>
      </li>
      <li>
        <router-link to="/search-item" class="item">
          <img src="../assets/images/icons/search-icon.png" alt="home-icon">
          <p class="medium">Search</p>
        </router-link>
      </li>
      <li>
        <a href="#" class="item">
          <img src="../assets/images/icons/order-list-icon.svg" alt="home-icon">
          <p class="medium">Order</p>
        </a>
      </li>
      <li>
        <router-link to="/user-profile" class="item">
          <img src="../assets/images/icons/user-circle-icon.png" alt="home-icon">
          <p class="medium">Profile</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'BottomMenu'
})
</script>