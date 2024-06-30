<template>
  <div class="favourite-items-page">
    <div class="container">
      <div class="page-title-bar start">
        <router-link to="/user-profile">
          <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray">
        </router-link>
        <strong class="large">Favourites</strong>
      </div>
    </div>
    <div class="favourite-items-inner">
      <div class="container">
        <FavouriteItemComponent/>
        <FavouriteItemComponent/>
        <FavouriteItemComponent/>
        <FavouriteItemComponent/>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import FavouriteItemComponent from "@/components/FavouriteItemComponent.vue";

export default defineComponent({
  name: 'FavouriteItemView',
  components: {FavouriteItemComponent}
})
</script>