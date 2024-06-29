<template>
  <div class="search-item-page detail-pages">
    <div class="container">
      <div class="search-bar">
        <input type="text" class="form-control" placeholder="Search.....">
        <img src="../assets/images/icons/search-icon.png" alt="search-icon" class="search-icon">
      </div>
      <div class="search-item-inner">
        <div class="search-item-tabs">
          <ul class="tabs-list">
            <li :class="{ active: activeTab === 'all' }"><a href="#" @click.prevent="selectTab('all')">All</a></li>
            <li :class="{ active: activeTab === 'restaurant' }"><a href="#" @click.prevent="selectTab('restaurant')">Restaurant</a></li>
            <li :class="{ active: activeTab === 'market' }"><a href="#" @click.prevent="selectTab('market')">Super market</a></li>
            <li :class="{ active: activeTab === 'pharmacy' }"><a href="#" @click.prevent="selectTab('pharmacy')">Pharmacy</a></li>
            <li :class="{ active: activeTab === 'car' }"><a href="#" @click.prevent="selectTab('car')">Car hire</a></li>
            <li :class="{ active: activeTab === 'ticket' }"><a href="#" @click.prevent="selectTab('ticket')">Ticket sales</a></li>
            <li :class="{ active: activeTab === 'pack-item' }"><a href="#" @click.prevent="selectTab('pack-item')">Item pick-up</a></li>
          </ul>
        </div>
        <div class="search-item-tabs-content">
          <div v-if="activeTab === 'all'">
            <NoSearchComponent/>
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
import NoSearchComponent from "@/components/NoSearchComponent.vue";
export default defineComponent({
  name : 'NoSearchView',
  components: {NoSearchComponent, BottomMenu},
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