import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


    const state = {
      count: 0,
      posterPath: 'http://image.tmdb.org/t/p/w185//81TGgmcObcfL6jcjPsU1n4n9THI.jpg'
    }

    const getters = {
        evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
    }

    const mutations = {
        increment (state) {
            state.count++
          },
          decrement (state) {
            state.count--
          }
    }
    const actions = {
        getPosterPath(){
            axios.get('http://localhost:5000/api/movies')
            .then(response => {
            let num = Math.floor(Math.random() * Math.floor(20))
        
            console.log(response.data.results[num].poster_path)
            state.posterPath = ' http://image.tmdb.org/t/p/w185/' + response.data.results[num].poster_path
            })
            .catch(e => {
            
            console.log(e)
            })
                }
    }
  
  export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
  })