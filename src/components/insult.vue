<template>
  <div class="insult">
    <p class="insult-body" :class="colorStyle()">{{ insult.insult.text }}</p>

    <footer class="footer fixed-bottom">
      <div class="container">
        <span class="text-muted">Place sticky footer content here.</span>
        <button v-on:click="next" class="btn btn-light">Next</button>
      </div>
    </footer>
  </div>
</template>

<script>
import Store from '../store';

export default {
  data: function() {
    return {
      insult: Store.methods.getInsult(this.$route.params.id)
    }
  },
  methods: {
    next: function() {
      var nextInsult = Store.methods.getNextInsult(this.insult);
      console.log("next", nextInsult);
      if(nextInsult == null) {
        this.$router.push({ name: "NoMoreInsults" });
      } else {
        this.$router.push({ name: 'Insult', params: { id: nextInsult.insult.uuid } });
      }
    },
    colorStyle: function() {
      console.log("insult.vue colorStyle");
      return Store.methods.getColorStyleByUUID(this.insult.insult.uuid);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .insult {
    height: 100%;
    background-color: red;
  }
  .insult-body {
    font-family: "Crimson Text", serif;
    /*font-style: italic;*/
    font-size: 2em;
    line-height: 1.1em;
    /*font-size: 2vw;*/
    padding: 1em;
    height: 100%;
  }

  .insult-body::before {
    content: "— ";
  }
</style>
