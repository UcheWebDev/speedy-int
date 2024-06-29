<template>
    <div class="recent-search-main-wrapper">
      <div class="recent-search-text">
        <img src="../assets/images/icons/clock-item.svg" alt="clock-item" class="clock-item">
        <strong>Recent searches</strong>
      </div>
      <ul class="recent-search-list">
        <li><a href="#">Pizza</a></li>
        <li><a href="#">grocery</a></li>
      </ul>
    </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name : 'RecentSearchComponent'
})
</script>