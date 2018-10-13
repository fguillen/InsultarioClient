<template>
  <transition name="fade" appear>
    <div class="insult">
      <p class="insult-body" :class="colorStyle()">{{ insult.insult.text }}</p>

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
  </transition>
</template>

<script>
import Store from '../store';

export default {
  data: function() {
    return {
      insult: Store.methods.getInsult(this.$route.params.id)
    }
  },
  created: function () {
    console.log("Insult.vue.created");
    Store.methods.markAsReaded(this.insult);
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
    previous: function() {
      var previousInsult = Store.methods.getPreviousInsult(this.insult);
      if(previousInsult != null) {
        this.$router.push({ name: 'Insult', params: { id: previousInsult.insult.uuid } });
      }
    },
    colorStyle: function() {
      console.log("insult.vue colorStyle");
      return Store.methods.getColorStyleByUUID(this.insult.insult.uuid);
    },
    markAsLoved() {
      console.log("insult.vue markAsLoved");
      Store.methods.markAsLoved(this.insult);
    },
    markAsUnloved() {
      console.log("insult.vue markAsUnloved");
      Store.methods.markAsUnloved(this.insult);
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

  .footer {
    padding-bottom: 1em;
  }

  .insult-body::before {
    content: "— ";
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
