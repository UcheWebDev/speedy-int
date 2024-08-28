<template>
  <div class="restaurant-items-page">
    <div class="container">
      <!-- Skeleton Loader -->
      <div class="skeleton-loader" v-if="!restaurant">
        <div class="skeleton-item" v-for="n in 5" :key="n">
          <div class="skeleton-img"></div>
          <div class="skeleton-content">
            <div class="skeleton-text"></div>
          </div>
        </div>
      </div>

      <div v-else>
        <div class="page-title-wrapper">
          <div class="page-title-bar start">
            <a @click="goBack">
              <img
                src="../assets/images/icons/back-arrow-light-gray.png"
                alt="back-arrow-dark-gray"
              />
            </a>
            <strong class="large">{{ restaurant?.restaurant_name }}</strong>
          </div>
          <ul class="icons">
            <li>
              <a href="#"
                ><img
                  src="../assets/images/icons/upload-green-icon.svg"
                  alt="upload-green-icon"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img
                  src="../assets/images/icons/heart-img.svg"
                  alt="upload-green-icon"
              /></a>
            </li>
          </ul>
        </div>
        <div class="reach-detail">
          <div class="text">
            <img
              src="../assets/images/icons/timmer-icon.svg"
              alt="timmer-icon"
            />
            <span class="medium">10-{{ restaurant.travel_time }} min</span>
          </div>
          <div class="text">
            <img
              src="../assets/images/icons/yellow-star-curve.svg"
              alt="timmer-icon"
            />
            <span class="medium">{{
              formatRating(restaurant.restaurant_ratings)
            }}</span>
          </div>
          <div class="text">
            <img
              src="../assets/images/icons/person-cycling.svg"
              alt="timmer-icon"
            />
            <span class="medium">₦400</span>
          </div>
        </div>

        <div v-if="foodItems.length">
          <div>
            <div class="search-bar">
              <input
                type="text"
                class="form-control"
                placeholder="Search food...."
              />
              <img
                src="../assets/images/icons/search-icon.png"
                alt="search-icon"
                class="search-icon"
              />
            </div>
            <!-- Tabs List -->
            <ul class="tabs-list">
              <li
                :class="{ active: selectedFoodType === 'All' }"
                @click="selectFoodType('All')"
              >
                <a href="#">All</a>
              </li>
              <li
                v-for="(type, index) in foodTypes"
                :key="index"
                :class="{ active: selectedFoodType === type }"
                @click="selectFoodType(type)"
              >
                <a href="#">{{ type }}</a>
              </li>
            </ul>
          </div>

          <div class="items-list-wrapper">
            <div class="container">
              <ItemWithPriceComponent :items="filteredFoodItems" />
            </div>
          </div>
        </div>

        <!-- No food item component-->
        <div class="mt-3" v-else>No food item...</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from "vue";
import ItemWithPriceComponent from "@/components/ItemWithPriceComponent.vue";

import { useHttp } from "@/composables/useHttp";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const { httpRequest } = useHttp();

const restaurant = ref(null);
const foodItems = ref([]);
const foodTypes = ref([]);
const selectedFoodType = ref("All");

const fetchRestuarantsDetails = async () => {
  const response = await httpRequest(
    "GET",
    `/customer/restaurants/${route.params.id}`
  );
  restaurant.value = response.data.data;
  foodItems.value = restaurant.value.foods || [];

  const types = [...new Set(foodItems.value.map((item) => item.food_type))];
  foodTypes.value = types;
};

const selectFoodType = (type) => {
  selectedFoodType.value = type;
};

const filteredFoodItems = computed(() => {
  if (selectedFoodType.value === "All") {
    return foodItems.value;
  }
  return foodItems.value.filter(
    (item) => item.food_type === selectedFoodType.value
  );
});

const formatRating = (rating) => {
  return Number.isInteger(rating) ? rating.toFixed(1) : rating;
};

const goBack = () => {
  router.back();
};

onMounted(() => {
  fetchRestuarantsDetails();
});
</script>

<style scoped>
/* Skeleton Loader Styles */
.skeleton-loader {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 240px;
}
.skeleton-item {
  display: flex;
  flex-direction: column; /* Stack items vertically */
  gap: 12px; /* Space between image and content */
}
.skeleton-img {
  width: 100%;
  height: 100px;
  background-color: #e0e0e0;
  border-radius: 8px;
}
.skeleton-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.skeleton-text {
  height: 20px;
  background-color: #e0e0e0;
  border-radius: 4px;
  width: 70%;
}
</style>