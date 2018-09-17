<template>
  <div class="hello">
    <p class="insult">{{ text }}</p>
    <button v-on:click="getInsult" class="btn btn-light">Get Another Insult</button>
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
      this.$http.get('https://insultario.herokuapp.com/front/insults/random').then(response => {
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
    font-size: 2em;
    line-height: 1.1em;
    /*font-size: 2vw;*/
  }

  .insult::before {
    content: "— ";
  }
</style>
