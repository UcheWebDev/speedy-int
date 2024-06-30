<template>
  <div class="item-order-detail-page detail-pages">
    <div class="container">
      <div class="page-title-bar start">
        <a href="#">
          <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray">
        </a>
        <strong class="large">Orders</strong>
      </div>
      <div class="order-name-wrapper">
        <div class="main-wrapper">
          <div class="img-wrapper">
            <img src="../assets/images/item-img.png" alt="item-img" class="item-img">
          </div>
          <div class="text-wrapper">
            <strong>Everyday supermarket - Mgbuob</strong>
            <span class="medium gray">1 item <span class="medium gray">₦2,130</span></span>
          </div>
        </div>
      </div>
      <div class="order-id-wrapper">
        <div class="order-id">
          <div class="text-wrapper">
            <strong>Order ID: <span>#239810</span></strong>
            <span class="gray">27 May, 2024 I 03:35 PM</span>
          </div>
          <div class="order-status">
            <span class="green medium bold"><span class="dot" style="background: #039855"></span>Completed</span>
          </div>
        </div>
        <div class="delivery-address">
          <div class="text-wrapper">
            <strong>Delivery address</strong>
            <span class="gray">Rumoroda, Port harcourt</span>
          </div>
        </div>
      </div>
      <div class="order-items">
        <strong>Your items</strong>
        <div class="items">
          <div class="num">
            <strong>x1 </strong>
          </div>
          <div class="text">
            <p>Golden Penny Soya Oil</p>
            <span class="medium gray">₦2,130  </span>
          </div>
        </div>
      </div>
      <div class="bill-detail">
        <strong>Bill details</strong>
        <div class="total">
          <span class="gray medium">Sub-total</span>
          <span class="medium">₦2,130</span>
        </div>
        <div class="total">
          <span class="gray medium">Delivery fee</span>
          <span class="medium">₦650</span>
        </div>
        <div class="total">
          <span class="gray medium">Service fee</span>
          <span class="medium">₦0</span>
        </div>
        <div class="total">
          <span class="medium bold">Total</span>
          <span class="medium bold">₦2,780</span>
        </div>
      </div>
    </div>
    <BottomMenu/>
  </div>
</template>

<script>
import {defineComponent} from "vue";
import BottomMenu from "@/components/BottomMenu.vue";
export default defineComponent({
  name : 'ItemOrderDetailPage',
  components: {BottomMenu}
})
</script>