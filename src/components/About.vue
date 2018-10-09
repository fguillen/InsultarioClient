<template>
  <div>
    <h1>About!</h1>
    <button v-on:click="loadUser">Load User</button>
    <button v-on:click="loadInsults">Load Insults</button>
    <button v-on:click="color">Color</button>
    <router-link class="navbar-brand" to="/">{{storeData.user}}</router-link>
    Message: <h2>{{storeData.message}}</h2>
    User: <h2>{{storeData.user}}</h2>
    <ul id="insults">
      <li v-for="insult in storeData.insults">
        {{ insult.insult.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from '../store';

export default {
  data: function () {
    return {
      storeData: Store.data
    }
  },
  methods: {
    loadUser: function (event) {
      Store.methods.loadUser().then(user => {
        console.log("loadUser.user", user);
      });
    },
    loadInsults: function (event) {
      console.log("About.loadInsults :: INI");
      Store.methods.loadInsults().then( () => {
        console.log("About.loadInsults :: END");
      });
    },
    color: function (event) {
      Store.methods.getColorByUUID("holahola");
    }
  }
}
</script>
