<template>
  <div class="item-order-page">
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
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name : 'ItemOrderView',
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