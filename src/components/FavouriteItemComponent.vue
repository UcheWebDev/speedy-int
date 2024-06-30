<template>
  <div class="favourite-item-card">
    <div class="main-wrapper">
      <div class="img-wrapper">
        <img src="../assets/images/item-img.png" alt="item-img" class="item-img">
      </div>
      <div class="text-wrapper">
        <p>Michael garden restaurant - PP </p>
        <span class="medium gray">10-25 mins <span class='gray medium'>₦400 delivery fee</span></span>
      </div>
    </div>
    <div class="rating">
      <img src="../assets/images/icons/star-img.svg" alt="star-img">
      <span>4.6</span>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name : 'FavouriteItemComponent'
})
</script>