<template>
  <div id="app">
    <button v-on:click="getPosterInfo">submit request</button>
    <FirstView msg1="my first message"></FirstView>
    <MoviePoster msg2="poster view"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FirstView from './components/firstView.vue'
import MoviePoster from './components/MoviePoster.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FirstView,
    MoviePoster,
  },
  methods:{

    getPosterInfo: ()=>{
      console.log('clicked')
      axios.get(' http://localhost:5000/api/movies')
      .then(response => {
      // JSON responses are automatically parsed.
      console.log(response.data) 
    })
    .catch(e => {
      // this.errors.push(e)
      console.log(e)
    })

    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
