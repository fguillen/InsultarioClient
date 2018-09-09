<template>
  <div id="app">
    <Insult />
  </div>
</template>

<script>
import Insult from './components/Insult.vue'

export default {
  name: 'app',
  components: {
    Insult
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
