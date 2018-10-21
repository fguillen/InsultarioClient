<template>
  <div class="insult">
    <transition name="fade" appear>
      <p class="insult-body" :class="colorStyle()">{{ insult.insult.text }}</p>
    </transition>

    <footer class="footer fixed-bottom">
      <div class="container-fluid">
        <div class="row">
          <div class="col text-left">
            <button v-on:click="previous" class="btn btn-lg btn-outline-dark fas fa-angle-left"></button>
          </div>
          <div class="col text-center">
            <button v-if="insult.loved" v-on:click="markAsUnloved" class="btn btn-lg btn-outline-dark fas fa-heart"></button>
            <button v-else v-on:click="markAsLoved" class="btn btn-lg btn-outline-dark far fa-heart"></button>
          </div>
          <div class="col text-right">
            <button v-on:click="next" class="btn btn-lg btn-outline-dark fas fa-angle-right"></button>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    insult: function() {
      return this.$store.getters.getInsult(this.$route.params.id)
    }
  },
  mounted: function() {
    console.log("Insult.vue.created");
    this.$store.commit('markAsReaded', this.insult);
  },
  methods: {
    next: function() {
      var nextInsult = this.$store.getters.getNextInsult(this.insult);
      console.log("next", nextInsult);
      if(nextInsult == null) {
        this.$router.push({ name: "NoMoreInsults" });
      } else {
        this.$router.push({ name: 'Insult', params: { id: nextInsult.insult.uuid } });
      }
    },
    previous: function() {
      var previousInsult = this.$store.getters.getPreviousInsult(this.insult);
      if(previousInsult != null) {
        this.$router.push({ name: 'Insult', params: { id: previousInsult.insult.uuid } });
      }
    },
    colorStyle: function() {
      console.log("insult.vue colorStyle", this);
      console.log("insult.vue colorStyle.insult", this.insult);
      return this.$store.getters.getColorStyleByUUID(this.insult.insult.uuid);
    },
    markAsLoved: function() {
      console.log("insult.vue markAsLoved");
      this.$store.dispatch('markAsLoved', this.insult);
    },
    markAsUnloved: function() {
      console.log("insult.vue markAsUnloved");
      this.$store.dispatch('markAsUnloved', this.insult);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .insult {
    position: absolute;
    top: 0px;
    right: 0px;
    left: 0px;
    bottom: 0px;
    background-color: red;
    z-index: 0;
  }

  .insult-body {
    /*font-style: italic;*/
    font-size: 2em;
    line-height: 1.1em;
    /*font-size: 2vw;*/

    padding: 1em;
    padding-top: 3em;

    height: 100%;
  }

  .footer {
    padding-bottom: 1em;
  }

  .fade-enter {
    /*color: red;*/
  }

  .fade-enter-active {
    /*transition: color 20s;
    color: blue;*/
    animation: fade-in 1s ease-out forwards;
  }

  @keyframes fade-in {
    from {
      transform: translateY(20px);
    }

    to{
      transform: translateY(0px);
    }
  }
</style>
