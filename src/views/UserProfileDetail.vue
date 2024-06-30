<template>
  <div class="user-profile-detail-page">
    <div class="container">
      <div class="profile-detail-inner">
        <div class="page-title-bar start">
          <router-link to="/user-profile">
            <img src="../assets/images/icons/back-arrow-light-gray.png" alt="back-arrow-dark-gray">
          </router-link>
          <strong class="large">Edit Profile Details</strong>
        </div>
        <form action="#" class="form">
          <div class="form-group">
            <label for="name">Account Name</label>
            <input type="text" class="form-control" placeholder="Paschal Dozie">
          </div>
          <div class="form-group">
            <label for="name">Email Address</label>
            <input type="text" class="form-control" placeholder="paschaldozie@gmail.com">
          </div>
          <div class="form-group">
            <label for="name">Phone Number</label>
            <input type="text" class="form-control" placeholder='09012346789'>
          </div>
          <div class="form-group">
            <label for="name">Birthday</label>
            <input type="text" class="form-control" placeholder="14 September">
          </div>
          <a href="#" class="btn-style full update-btn">Update</a>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: 'UserProfileDetail'
})
</script>