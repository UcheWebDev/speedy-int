<template>
  <b-modal
    id="my-modal"
    title="My Modal"
    centered
    class="car-hire-single-item-modal"
    v-model="isVisible"
  >
    <div class="car-hire-signle-item-wrapper">
      <div class="item-img-wrapper">
        <img
          src="../assets/images/tv-img.png"
          alt="item-img"
          class="item-img"
        />
        <a href="#" class="cross-circle-icon">
          <img
            src="../assets/images/icons/cross-circle-icon.png"
            alt="item-img"
          />
        </a>
      </div>
      <div class="item-content-wrapper">
        <div class="container">
          <div class="content-wrapper">
            <div class="d-flex justify-content-between gap-3">
              <div class="title">
                <strong class="large name"
                  >Hisense 32''Smart TV + Netflix</strong
                >
                <p class="warning brand-text my-1 p">
                  Brand:Hisense I Similar products from Hisense
                </p>
                <p class="price"><span class="bold">211,500</span></p>
                <span class="gray instock-text">In stock</span>
              </div>
            </div>
          </div>
          <div class="add-to-cart-wrapper">
            <div class="counter-wrapper">
              <ul class="list">
                <li>
                  <a href="#"
                    ><img
                      src="../assets/images/icons/minus-icon.png"
                      alt="minus-icon"
                  /></a>
                </li>
                <li>1</li>
                <li>
                  <a href="#"
                    ><img
                      src="../assets/images/icons/plus-icon-black.svg"
                      alt="minus-icon"
                  /></a>
                </li>
              </ul>
              <div class="like-icon">
                <a href="#">
                  <img
                    src="../assets/images/icons/heart-img.svg"
                    alt="heart-img"
                    class="heart-img"
                /></a>
              </div>
            </div>
            <router-link to="/electronic-checkout" class="btn-style full"
              >Add 1 for ₦4,000</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const modal = ref(false);
const props = defineProps({
  product: {
    type: Object,
  },
  showModal: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:showModal"]);
const isVisible = ref(props.showModal);
watch(
  () => props.showModal,
  (newVal) => {
    isVisible.value = newVal;
  }
);
function closeModal() {
  isVisible.value = false;
  emit("update:showModal", false);
}
</script>