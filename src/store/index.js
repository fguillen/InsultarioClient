import Vue from 'vue';

const Store = {
  // If I make a function here nothing works
  data: {
    user: null,
    insults: [],
    message: "Message 1"
  },
  methods: {
    loadUser: function() {
      console.log('Loading User');
      Store.data.user = Vue.cookies.get('user');

      if(Store.data.user == null) {
        console.log("Creating User");
        Vue.http.post('http://insultario.com.pizza/front/users').then(response => {
          Store.data.user = response.body.uuid;
          Vue.cookies.set('user', Store.data.user);
        });
      }
    },
    loadInsults: function() {
      console.log('clearMessageAction triggered');
      Vue.http.get('http://insultario.com.pizza/front/users/' + Store.data.user + '/insults').then(response => {
        Store.data.insults = response.body;
      });
    },
    getInsult: function(uuid) {
      console.log("getInsult", uuid);
      console.log("Store.data.insults", Store.data.insults);
      var insult = Store.data.insults.filter(insult => insult.insult.uuid === uuid)[0];
      console.log("insult", insult);

      return insult;
    }
  }
}

export default Store;
