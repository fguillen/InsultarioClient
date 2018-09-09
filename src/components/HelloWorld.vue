<template>
  <div class="hello">
    <h1>{{ text }}</h1>
    <button v-on:click="getInsult">Get Another Insult</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      text: 'HelloWorld'
    }
  },
  methods: {
    getInsult: function() {
      console.log("getInsult")
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
