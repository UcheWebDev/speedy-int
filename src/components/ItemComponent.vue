<template>
  <div class="item-main-wrapper">
    <div class="item-img">
      <router-link to="#">
        <img src="../assets/images/item-img.png" alt="item-img">
      </router-link>
    </div>
    <div class="about-item">
      <div class="row">
        <div class="col-9">
          <div class="content">
            <p class="bold">Michael garden restaurant - PP</p>
            <span>₦400 Delivery Fee 10-25 min</span>
          </div>
        </div>
        <div class="col-3 text-end">
          <div class="ratings-wrapper">
            <img src="../assets/images/icons/heart-img.svg" alt="heart-img">
            <div class="rating">
            <img src="../assets/images/icons/star-img.svg" alt="heart-img">
              <span>4.6</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name : 'ItemComponent'
})
</script>