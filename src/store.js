import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
import router from "../src/router"

Vue.use(Vuex)

axios.defaults.headers.common['Authorization'] = JSON.stringify(localStorage.getItem('accessToken'));
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default new Vuex.Store({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null,
    user:{},
    companyUsername:''
  },
  mutations: {
    loginStop: (state, errorMessage) => {
      state.loggingIn = false;
      state.loginError = errorMessage;
    },
    loginStart: (state) => {
      state.loggingIn = true;
    },
    updateCompany:(state, username)=>{
      state.company=username;
      localStorage.setItem("companyUsername", username)

    },
    updateAccessToken: (state, accessToken) => {
      state.accessToken = accessToken;
    },
    logout: (state) => {
      state.accessToken = null;
    },
    getLoggedInUser(state, user){
      state.user=user
    }


  },
  actions: {
    doLogin({ commit }, loginData) {
      commit('loginStart');    
      axios.post(`http://${loginData.username}.localhost:8000/dashboard/api/obtain-token/`, {
        ...loginData
      })
      .then(response => {
        localStorage.setItem('accessToken', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        commit('getLoggedInUser', response.data.user)
        commit('loginStop', null);
        commit('updateCompany', loginData.username);
        commit('updateAccessToken', response.data.token);

        router.push('/dashboard');

      })
      .catch(error => {
        commit('loginStop', error.response.data.error);
        commit('updateAccessToken', null);
      })
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'));
    },
    logout({ commit }) {
      localStorage.removeItem('accessToken');
      commit('logout');
      router.push('/login');
    },

    doLoggedInUser({commit}, data){
      axios.post(`http://${this.state.CompanyUsername}.localhost:8000/dashboard/api/employee/${this.user.id}`, {
        ...data
      }).then((response)=>{
        commit('getLoggedInUser', response.data.data)
      }).catch((error)=>{
        router.push("/login")
      })

    }

  }
})
