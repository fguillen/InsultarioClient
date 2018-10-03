<template>
  <div id="app" class="container">
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: "Montserrat", serif;
}
</style>
