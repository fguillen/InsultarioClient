<template>
  <div class="navbar navbar-light shadow-sm">
    <div class="col-8 col-md-10">
      <router-link class="navbar-brand" to="/about">
        <img src="/assets/logo.png" height="30" alt="Insultario">
      </router-link>
    </div>

    <div class="col-2 col-md-1 text-right">
      <ul class="navbar-nav flex-row" style="float:right;">
        <li class="nav-item">
          <a href v-on:click.prevent="onlyUnreadToggle" class="nav-link px-2" v-bind:class="{ active: this.$store.state.filters.onlyUnread }"><i class="far fa-eye-slash"></i></a>
        </li>
        <li class="nav-item">
          <a href v-on:click.prevent="onlyLovedToggle" class="nav-link px-2" v-bind:class="{ active: this.$store.state.filters.onlyLoved }"><i class="fas fa-heart"></i></a>
        </li>
      </ul>
    </div>

    <div class="col-2 col-md-1 text-right">
      <ul class="navbar-nav flex-row" style="float:right;">
        <li class="nav-item">
          <router-link class="nav-link px-2" to="/insults"><i class="fas fa-list"></i></router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      onlyUnreadToggle() {
        console.log("onlyUnreadToggle");
        this.$store.commit("onlyUnreadToggle");
      },
      onlyLovedToggle() {
        console.log("onlyLovedToggle");
        this.$store.commit("onlyLovedToggle");
      }
    }
  }
</script>

<style scoped>
  .navbar {
    z-index: 1;
    padding-top: 1px;
    padding-bottom: 1px;
    padding-left: 0;
    padding-right: 0;

    background-color: #dc9b48;
  }
</style>
