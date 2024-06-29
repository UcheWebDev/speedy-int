<template>
  <div class="no-search-exists">
    <div class="content-wrapper">
      <img src="../assets/images/icons/search-not-found-icon.svg" alt="search-not-found-icon" class="search-not-found-icon">
      <p class="medium">Search for an item and it will <br> show here</p>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";
export default defineComponent({
  name : 'NoSearchComponent'
})
</script>