import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex)

    const state = {
      count: 0,
      posterPath: 'http://image.tmdb.org/t/p/w185//81TGgmcObcfL6jcjPsU1n4n9THI.jpg'
    }

  export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })