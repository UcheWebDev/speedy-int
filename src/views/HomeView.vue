<template>
  <div class="home-page detail-pages">
    <div class="container">
      <div class="delivery-to-text text-center">
        <span class="medium pink">Deliver to</span>
        <select class="form-select" aria-label="Default select example">
          <option selected>Port harcourt, Nigeria</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div class="pick-and-save">
        <div class="row">
          <div class="col-8">
            <strong>Pick-up and Save</strong>
            <span>Convenient item pickups and secure deliveries right to your door</span>
          </div>
          <div class="col-4"></div>
        </div>
      </div>
      <div class="products-main-wrapper">
        <div class="row">
          <div class="col-4 mb-3">
            <div class="product light-pink-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/resturant-icon.svg" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">Restaurants</span>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="product light-pink-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/market-icon.svg" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">Supermarkets</span>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="product light-blue-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/pharmacy-icon.svg" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">Pharmacy</span>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="product light-blue-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/car-icon.svg" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">Car hire</span>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="product light-blue-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/ticket-icon.png" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">ticket sales</span>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="product light-pink-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/item-pack-icon.svg" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">item pick-up</span>
              </div>
            </div>
          </div>
          <div class="col-4 mb-3">
            <div class="product light-pink-bg">
              <div class="icon-wrapper">
                <img src="../assets/images/icons/tv-icon.svg" alt="resturant-icon">
              </div>
              <div class="text">
                <span class="medium">Electronics</span>
              </div>
            </div>
          </div>
          <div class="col-8 mb-3">
            <div class="product order-from-places light-blue-bg">
              <span class="medium">Order from Top-rated places</span>
              <img src="../assets/images/icons/grocery-icon.png" alt="grocery-icon" class="grocery-icon">
            </div>
          </div>
        </div>
      </div>
      <div class="popular-near-me-items">
        <strong>Popular near you</strong>
        <div class="all-near-items">
          <ItemComponent/>
          <ItemComponent/>
        </div>
      </div>
    </div>
    <BottomMenu/>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import BottomMenu from "@/components/BottomMenu.vue";
import ItemComponent from "@/components/ItemComponent.vue";

export default defineComponent({
  name: 'HomeView',
  components: {ItemComponent, BottomMenu},
});
</script>
