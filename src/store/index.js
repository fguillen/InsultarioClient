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
    loadAll: function() {
      return new Promise(
        function(resolve, reject) {
          Store.methods.loadUser()
          .then(Store.methods.loadInsults)
          .then(resolve)
        });
    },
    loadUser: function() {
      return new Promise(
        function (resolve, reject) {
          console.log('Loading User');
          Store.data.user = Vue.cookies.get('user');

          if(Store.data.user == null) {
            console.log("Creating User");
            Vue.http.post('http://insultario.com.pizza/front/users').then(response => {
              Store.data.user = response.body.uuid;
              Vue.cookies.set('user', Store.data.user);
              resolve(Store.data.user);
            });
          } else {
            resolve(Store.data.user);
          }
        });
    },
    loadInsults: function() {
      return new Promise(
        function(resolve, reject) {
          console.log('loadInsults :: INI');
          Vue.http.get('http://insultario.com.pizza/front/users/' + Store.data.user + '/insults').then(response => {
            Store.data.insults = response.body;
            resolve();
          });
          console.log('loadInsults :: END');
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
    },
    getPreviousInsult(insult) {
      var actualIndex = _.indexOf(Store.data.insults, insult);
      var result = Store.data.insults[actualIndex - 1];

      return result;
    },
    markAsReaded(insult) {
      console.log('markAsReaded triggered');
      Vue.http.put('http://insultario.com.pizza/front/users/' + Store.data.user + '/insults/' + insult.insult.uuid + '/mark_as_readed').then(response => {
        console.log("(markAsReaded) response.body", response.body);
        insult.readed = true;
      });
    }
  }
}

export default Store;
