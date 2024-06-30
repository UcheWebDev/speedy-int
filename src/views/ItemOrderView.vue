<template>
  <div class="item-order-page detail-pages">
    <div class="container">
      <div class="page-title-bar start">
        <a href="#">
          <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray">
        </a>
        <strong class="large">Orders</strong>
      </div>
      <div class="order-inner-wrapper">
        <ul class="tabs-list">
          <li :class="{ active: activeTab === 'all' }"><a href="#" @click.prevent="selectTab('all')">All</a></li>
          <li :class="{ active: activeTab === 'active' }"><a href="#" @click.prevent="selectTab('active')">Active</a></li>
          <li :class="{ active: activeTab === 'completed' }"><a href="#" @click.prevent="selectTab('completed')">Completed</a></li>
        </ul>
        <div class="items-orders-main">
          <div v-if="activeTab === 'all'">
            <div class="order-item-card">
              <div class="main-wrapper">
                <div class="row">
                  <div class="col-8">
                    <div class="item-detail-wrapper">
                      <div class="img-wrapper">
                        <img src="../assets/images/item-img.png" alt="item-img" class="item-img">
                      </div>
                      <div class="text-wrapper">
                        <strong>Michael garden restaurant - PP </strong>
                        <span class="gray bold medium">1 item <span class="medium bold gray">₦4,000</span></span>
                        <div class="delivery-text">
                          <img src="../assets/images/icons/bike-icon.svg" alt="bike-icon" class='bike-icon'>
                          <span class="gray bold medium">Delivery to Port</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="order-detail-text">
<!--                      <span class="green bold medium"> <span class="dot" style="background: #039855"></span> Completed</span>-->
                      <router-link to="/item-order-detail" class="btn-style text">View details <img src="../assets/images/icons/right-arrow-pink.png" alt="right-arrow-pink"></router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <a href="#" class="btn-style full">Checkout</a>
                                <a href="#" class="btn-style full gray">Clear</a>
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'active'">
            <div class="order-item-card">
              <div class="main-wrapper">
                <div class="row">
                  <div class="col-8">
                    <div class="item-detail-wrapper">
                      <div class="img-wrapper">
                        <img src="../assets/images/item-img.png" alt="item-img" class="item-img">
                      </div>
                      <div class="text-wrapper">
                        <strong>Michael garden restaurant - PP </strong>
                        <span class="gray bold medium">1 item <span class="medium bold gray">₦4,000</span></span>
                        <div class="delivery-text">
                          <img src="../assets/images/icons/bike-icon.svg" alt="bike-icon" class='bike-icon'>
                          <span class="gray bold medium">Delivery to Port</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="order-detail-text">
                      <span class="orrage bold medium"> <span class="dot" style="background: #F79009"></span> Active</span>
                      <router-link to="/item-order-detail" class="btn-style text">View details <img src="../assets/images/icons/right-arrow-pink.png" alt="right-arrow-pink"></router-link>
                    </div>
                  </div>
                </div>
              </div>
              <div class="btn-wrapper">
                <a href="#" class="btn-style full">Track order</a>
<!--                <a href="#" class="btn-style full gray">Clear</a>-->
              </div>
            </div>
          </div>
          <div v-if="activeTab === 'completed'">
            <div class="order-item-card">
              <div class="main-wrapper">
                <div class="row">
                  <div class="col-8">
                    <div class="item-detail-wrapper">
                      <div class="img-wrapper">
                        <img src="../assets/images/item-img.png" alt="item-img" class="item-img">
                      </div>
                      <div class="text-wrapper">
                        <strong>Michael garden restaurant - PP </strong>
                        <span class="gray bold medium">1 item <span class="medium bold gray">₦4,000</span></span>
                        <div class="delivery-text">
                          <img src="../assets/images/icons/bike-icon.svg" alt="bike-icon" class='bike-icon'>
                          <span class="gray bold medium">Delivery to Port</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-4 text-end">
                    <div class="order-detail-text">
                      <span class="green bold medium"> <span class="dot" style="background: #039855"></span> Completed</span>
                      <router-link to="/item-order-detail" class="btn-style text">View details <img src="../assets/images/icons/right-arrow-pink.png" alt="right-arrow-pink"></router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
  name : 'ItemOrderView',
  components: {BottomMenu},
  data() {
    return {
      activeTab: 'all' // Default active tab
    };
  },
  methods: {
    selectTab(tab) {
      this.activeTab = tab;
    }
  }
})
</script>