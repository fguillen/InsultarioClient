<template>
  <div id="app">
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  font-family: "Montserrat", serif;
  padding-top: 56px;
  height: 100%;
}

.insult-style-0 {
  background-color: rgba(91, 192, 235, 1);
}

.insult-style-1 {
  background-color: rgba(253, 231, 76, 1);
}

.insult-style-2 {
  background-color: rgba(155, 197, 61, 1);
}

.insult-style-3 {
  background-color: rgba(229, 89, 52, 1);
}

.insult-style-4 {
  background-color: rgba(250, 121, 33, 1);
}

.insult-style-5 {
  background-color: rgba(80, 132, 117, 1);
}

.insult-style-6 {
  background-color: rgba(242, 179, 206, 1);
}

.insult-style-7 {
  background-color: rgba(70, 117, 160, 1);
}

.insult-style-8 {
  background-color: rgba(255, 245, 156, 1);
}

.insult-style-9 {
  background-color: rgba(194, 54, 73, 1);
}

.insult-style-10 {
  background-color: rgba(146, 166, 181, 1);
}

.insult-style-11 {
  background-color: rgba(144, 186, 135, 1);
}

.insult-style-12 {
  background-color: rgba(255, 224, 153, 1);
}

.insult-style-13 {
  background-color: rgba(232, 89, 37, 1);
}

.insult-style-14 {
  background-color: rgba(247, 123, 210, 1);
}

</style>
