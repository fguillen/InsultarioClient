<template>

  <div class="list-group">
    <router-link v-for="insult in storeData.insults" :to="{ name: 'Insult', params: { id: insult.insult.uuid } }" class="list-group-item list-group-item-action" :class="colorStyle(insult.insult.uuid)">
      {{ insult.insult.text }}
    </router-link>
  </div>

</template>

<script>
import Store from '../store';

export default {
  data: function() {
    return {
      storeData: Store.data
    }
  },
  methods: {
    colorStyle(uuid) {
      return Store.methods.getColorStyleByUUID(uuid);
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
