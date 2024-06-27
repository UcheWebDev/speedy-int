<template>
  <div class="top-bar">
    <div class="container">
      <div class="row">
        <div class="col-4 align-self-center">
          <strong>9:41</strong>
        </div>
        <div class="col-8 align-self-center">
          <ul class="icons">
            <li><img src="../assets/images/icons/signal-icon.png" alt="signal-icon"></li>
            <li><img src="../assets/images/icons/wifi-icon.png" alt="signal-icon"></li>
            <li><img src="../assets/images/icons/battery-icon.png" alt="signal-icon"></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name : 'TopBar'
})
</script>