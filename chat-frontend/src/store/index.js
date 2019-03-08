import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loggedin: false,
    username: "",
    themeColor:"info"
  },
  mutations: {
    LOGIN(state, username) {
      state.loggedin = true;
      state.username = username;
    },
    LOGOUT(state) {
      state.loggedin = false;
      state.username = "";
      state.themeColor = "info";
    },
    CHANGECOLOR(state, color){
        state.themeColor= color;
    }
  },
  actions: {
    login(commit, username) {
      this.commit("LOGIN", username);
      localStorage.setItem("username", username);
    },
    logout() {
      this.commit("LOGOUT");
      localStorage.removeItem("username");
    },
    init(){
      const usernameLocalStorage = localStorage.getItem("username");
      console.log(usernameLocalStorage);
      if (usernameLocalStorage) {
        this.commit("LOGIN", usernameLocalStorage);
      }
    },
    changeColor(commit, color){
      this.commit("CHANGECOLOR", color);
      localStorage.setItem("themeColor", color);
    }
  },
  getters: {
    username: function(state) {
      return state.username;
    },
    loggedIn: function(state) {
      return state.loggedin;
    },
    themeColor: function(state) {
      return state.themeColor;
    }
  }
});
