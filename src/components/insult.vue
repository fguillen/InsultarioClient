<template>
  <div class="hello">
    <p class="insult" :class="colorStyle()">{{ insult.text }}</p>
    <button v-on:click="next" class="btn btn-light">Next</button>
  </div>
</template>

<script>
import Store from '../store';

export default {
  data: function() {
    return {
      insult: Store.methods.getInsult(this.$route.params.id).insult
    }
  },
  methods: {
    next: function() {
      console.log("param", this.$route.params.id);
    },
    colorStyle: function() {
      console.log("insult.vue colorStyle");
      return Store.methods.getColorStyleByUUID(this.insult.uuid);
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
