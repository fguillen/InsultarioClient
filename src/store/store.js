import Vue from 'vue';
import Vuex from 'vuex';
import {_} from 'vue-underscore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    user: null,
    insults: [],
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
    ],
    filters: {
      onlyUnread: false,
      onlyLoved: false
    }
  },
  getters:{
    getInsult: (state) => (payload) => {
      return state.insults.filter(insult => insult.insult.uuid === payload)[0];
    },
    getColorStyleByUUID: (state) => (payload) => {
      var chars = payload.split("");
      var numbers = _.map(chars, function(char) { return char.charCodeAt() });
      var total = _.reduce(numbers, function(memo, num){ return memo + num; }, 0);
      var totalColors = state.colorsStyles.length;
      var colorIndex = total % totalColors;
      var result = state.colorsStyles[colorIndex];

      return result;
    },
    getNextInsult: (state) => (payload) => {
      var actualIndex = _.indexOf(state.insults, payload);
      var result = state.insults[actualIndex + 1];

      return result;
    },
    getPreviousInsult: (state) => (payload) => {
      var actualIndex = _.indexOf(state.insults, payload);
      var result = state.insults[actualIndex - 1];

      return result;
    },
  },
  mutations: {
    setInsults: (state, payload) => {
      state.insults = payload;
    },
    setUser: (state, payload) => {
      state.user = payload;
    },
    markAsReaded: (state, payload) => {
      payload.readed = true;
    },
    markAsLoved: (state, payload) => {
      payload.loved = true;
    },
    markAsUnloved: (state, payload) => {
      payload.loved = false;
    }
  },
  actions: {
    loadAll: ({ commit, dispatch }) => {
      return new Promise(
        function(resolve, reject) {
          dispatch('loadUser')
          .then(() => { dispatch('loadInsults') })
          .then(resolve)
        });
    },
    loadUser: ({ commit, state }, payload) => {
      return new Promise(
        function (resolve, reject) {
          console.log('Loading User');
          commit('setUser', Vue.cookies.get('user'));

          if(state.user == null) {
            console.log("Creating User");
            Vue.http.post('http://insultario.com.pizza/front/users').then(response => {
              commit('setUser', response.body.uuid);
              Vue.cookies.set('user', state.user);
              resolve(state.user);
            });
          } else {
            resolve(state.user);
          }
        });
    },
    loadInsults: ({ commit, state }, payload) => {
      return new Promise(
        function(resolve, reject) {
          console.log('loadInsults :: INI');
          Vue.http.get('http://insultario.com.pizza/front/users/' + state.user + '/insults').then(response => {
            commit('setInsults', response.body);
            resolve();
          });
          console.log('loadInsults :: END');
        });
    },
    markAsReaded: ({ commit, state }, insult) => {
      console.log('markAsReaded triggered');
      Vue.http.put('http://insultario.com.pizza/front/users/' + state.user + '/insults/' + insult.insult.uuid + '/mark_as_readed').then(response => {
        console.log("(markAsReaded) response.body", response.body);
        commit('markAsReaded', insult);
      });
    },
    markAsLoved: ({ commit, state }, insult) => {
      console.log('markAsLoved triggered');
      Vue.http.put('http://insultario.com.pizza/front/users/' + state.user + '/insults/' + insult.insult.uuid + '/mark_as_loved').then(response => {
        console.log("(markAsLoved) response.body", response.body);
        commit('markAsLoved', insult);
      });
    },
    markAsUnloved: ({ commit, state }, insult) => {
      console.log('markAsUnloved triggered');
      Vue.http.put('http://insultario.com.pizza/front/users/' + state.user + '/insults/' + insult.insult.uuid + '/mark_as_unloved').then(response => {
        console.log("(markAsUnloved) response.body", response.body);
        commit('markAsUnloved', insult);
      });
    }
  }
});
