<template>
  <div id="app" class="container">
    <Navbar />
    <br />
    <Insult />
  </div>
</template>

<script>
import Insult from './components/insult.vue'
import Navbar from './components/navbar.vue'

export default {
  name: 'app',
  components: {
    Insult,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: "Montserrat", serif;
}
</style>
