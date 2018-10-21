<template>
  <div class="list-group">
    <router-link v-for="insult in insults" :to="{ name: 'Insult', params: { id: insult.insult.uuid } }" class="list-group-item list-group-item-action" :class="colorStyle(insult.insult.uuid)">
      <div class="row">
        <div class="col-11">
          <div class="insult">
            <p class="insult-body">{{ insult.insult.text | truncate }}</p>
          </div>
        </div>
        <div class="col-1 text-right">
          <span v-if="insult.readed" class="fas fa-eye"></span>
          <span v-if="insult.loved" class="fas fa-heart"></span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  methods: {
    colorStyle(uuid) {
      console.log("into Insults.colorStyle", uuid);
      return this.$store.getters.getColorStyleByUUID(uuid);
    }
  },
  computed: {
    insults() {
      console.log("into Insults, insults", this.$store.state.insults);
      return this.$store.state.insults;
    }
  },
  filters: {
    truncate: function (string) {
      const limit = 40;
      if (!string) return '';
      if (string.length < limit ) return string;

      string = string.substring(0, limit);
      string += "...";
      return string;
    }
  },
  mounted() {
    console.log("Insults component mounted!");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .insult-body {
    font-size: 1.5em;
    line-height: 1.1em;
    padding: 0.5em;
    margin: 0;
  }
</style>
