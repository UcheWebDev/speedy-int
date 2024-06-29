<template>
  <div class="rider-dashboard">
    <div class="container">
      <div class="dashboard-page-title">
        <div class="row">
          <div class="col-3 align-self-center">
            <a href="#"><img src="../assets/images/icons/user-circle-icon.png" alt="user-circle-icon"
                             class="user-circle-icon"></a>
          </div>
          <div class="col-6 text-center align-self-center">
            <h4>Dashboard</h4>
          </div>
          <div class="col-3 text-end align-self-center">
            <router-link to="/notifications"><img src="../assets/images/icons/bell-icon.png" alt="user-circle-icon" class="bell-icon"></router-link>
          </div>
        </div>
      </div>
      <div class="delivery-detail-cards">
        <div class="row">
          <div class="col-6">
            <div class="deliver-card light-orange">
              <div class="title">
                <span>Total Delivery</span>
                <div class="icon">
                  <img src="../assets/images/icons/calendar-tick-orange.png" alt="calendar-tick-orange"
                       class="calendar-tick-orange">
                </div>
              </div>
              <strong>4 Orders</strong>
              <span><span class="green">+25%</span> vs past month</span>
            </div>
          </div>
          <div class="col-6">
            <div class="deliver-card light-pink">
              <div class="title">
                <span>Delivery Issue</span>
                <div class="icon">
                  <img src="../assets/images/icons/file-issue-icon.png" alt="calendar-tick-orange"
                       class="calendar-tick-orange">
                </div>
              </div>
              <strong>2 Reports</strong>
              <span><span class="pink">-5%</span> vs past month</span>
            </div>
          </div>
        </div>
      </div>
      <div class="orders-detail">
        <div class="orders-tabs-wrapper">
          <strong>Orders</strong>
          <ul class="tabs-list">
            <li :class="{ active: activeTab === 'all' }"><a href="#" @click.prevent="selectTab('all')">All(4)</a></li>
            <li :class="{ active: activeTab === 'active' }"><a href="#" @click.prevent="selectTab('active')">Active(2)</a></li>
            <li :class="{ active: activeTab === 'completed' }"><a href="#" @click.prevent="selectTab('completed')">Completed(2)</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-if="activeTab === 'all'">
      <div class="orders-tab-detail-wrapper">
        <ActiveOrdersComponent/>
        <CompletedOrdersComponent/>
        <CompletedOrdersComponent/>
        <ActiveOrdersComponent/>
      </div>
    </div>
    <div v-if="activeTab === 'active'">
      <div class="orders-tab-detail-wrapper">
        <ActiveOrdersComponent/>
        <ActiveOrdersComponent/>
        <ActiveOrdersComponent/>
      </div>
    </div>
    <div v-if="activeTab === 'completed'">
      <div class="orders-tab-detail-wrapper">
        <CompletedOrdersComponent/>
        <CompletedOrdersComponent/>
        <CompletedOrdersComponent/>
      </div>
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import CompletedOrdersComponent from "@/components/CompletedOrdersComponents.vue";
import ActiveOrdersComponent from "@/components/ActiveOrdersComponents.vue";

export default defineComponent({
  name: 'RiderDashboard',
  components: {ActiveOrdersComponent, CompletedOrdersComponent},
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