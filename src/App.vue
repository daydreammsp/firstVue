<template>
  <div id="app">
    
    <FirstView></FirstView>
    <button v-on:click="updateMessage">pick poster</button>
    <button v-on:click="submitPay">submit payment</button>
    <img v-bind:src="message"/>
    <MoviePoster/>
   
    
  </div>
</template>

<script>
import FirstView from './components/firstView.vue'
import MoviePoster from './components/MoviePoster.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    
    FirstView,
    MoviePoster,
  },
  data: function(){
    return{
message:  "http://image.tmdb.org/t/p/w185//81TGgmcObcfL6jcjPsU1n4n9THI.jpg",

    }
  },
  methods:{
    mounted: function(){
      
        
    },
    updated: function(){
      
    },
    updateMessage: function () {
      let poster;
      axios.get('http://localhost:5000/api/movies')
      .then(response => {
      let num = Math.floor(Math.random() * Math.floor(20))
       poster = ' http://image.tmdb.org/t/p/w185/' + response.data.results[num].poster_path
    console.log(poster)
    this.message = poster
      
      this.$nextTick(function () {
        
      })
    })
    .catch(e => {
      
      console.log(e)
    })

      
    },
    getPosterInfo: ()=>{
      
      axios.get('http://localhost:5000/api/movies')
      .then(response => {
      let num = Math.floor(Math.random() * Math.floor(20))
       
   
    console.log(response.data.results[num].poster_path)
    })
    .catch(e => {
      
      console.log(e)
    })

    },
    submitPay: ()=>{
      
      axios.post('http://localhost:5000/api/square')
      .then(response => {
      
       
   
    console.log(response.data)
    })
    .catch(e => {
      
      console.log(e)
    })

    }
  }
}
// window.location.href = "http://siwei.me"
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
