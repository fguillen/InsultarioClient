import Vue from 'vue';
import {_} from 'vue-underscore';

const Store = {
  // If I make a function here nothing works
  data: {
    user: null,
    insults: [],
    message: "Message 1",
    colorsStyles: [
      "insult-style-0",
      "insult-style-1",
      "insult-style-2",
      "insult-style-3",
      "insult-style-4",
      "insult-style-5",
      "insult-style-6",
      "insult-style-7",
      "insult-style-8",
      "insult-style-9",
      "insult-style-10",
      "insult-style-11",
      "insult-style-12",
      "insult-style-13"
    ]
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
    },
    getColorStyleByUUID(uuid) {
      var chars = uuid.split("");
      var numbers = _.map(chars, function(char) { return char.charCodeAt() });
      var total = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
      var totalColors = Store.data.colorsStyles.length;
      var colorIndex = total % totalColors;
      var result = Store.data.colorsStyles[colorIndex];

      console.log("getColorStyleByUUID", uuid, result);

      return result;
    },
    getNextInsult(insult) {
      console.log("XXx", Store.data.insults[0], insult);
      var actualIndex = _.indexOf(Store.data.insults, insult);
      console.log("getNextInsult", insult, actualIndex);
      console.log("Store.data.insults", Store.data.insults);
      var result = Store.data.insults[actualIndex + 1];

      return result;
    }
  }
}

export default Store;
