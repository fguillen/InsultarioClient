<template>
  <div class="hello">
    <p class="insult">{{ text }}</p>
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
      console.log("getInsult");
      this.$http.get('https://insultario.herokuapp.com/front/insults/random').then(response => {
        console.log(response.body);
        this.text = response.body.text;
      });
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .insult {
    font-family: "Crimson Text", serif;
    /*font-style: italic;*/
    font-size: 3em;
    line-height: 1em;
    /*font-size: 2vw;*/
  }
</style>
