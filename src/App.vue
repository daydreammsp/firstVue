<template>
  <div id="app">
    <p>
    <!-- use router-link component for navigation. -->
    <!-- specify the link by passing the `to` prop. -->
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <!-- route outlet -->
  <!-- component matched by the route will render here -->
  <router-view></router-view>
   <!-- <p>{{this.$route}}</p> -->

    <!-- <h2>Counter: {{ $store.state.count }} times, count is {{ evenOrOdd }}</h2> -->
    <!-- <button class="btn btn-success" @click="increment">+</button> -->
    <!-- <button class="btn btn-danger" @click="decrement">-</button> -->
    <!-- <FirstView></FirstView> -->
    <!-- <button v-on:click="getPosterPath">pick poster</button> -->
    <!-- <button v-on:click="submitPay">submit payment</button> -->
    <!-- <img v-bind:src="$store.state.posterPath"/> -->
    
    <!-- <MoviePoster/> -->
   
    
  </div>
</template>

<script>
import FirstView from './components/firstView.vue'
import MoviePoster from './components/MoviePoster.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex'
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
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods:{
    getPosterPath: function(){
      this.$store.dispatch('getPosterPath')
    },
    increment: function(){
      
      this.$store.commit('increment')
    },
    decrement: function(){
      
      this.$store.commit('decrement')
    },
    mounted: function(){
      
        
    },
    updated: function(){
      
    },
    computed: function(){

    },
    // updateMessage: function () {
    //   let poster;
    //   axios.get('http://localhost:5000/api/movies')
    //   .then(response => {
    //   let num = Math.floor(Math.random() * Math.floor(20))
    //    poster = ' http://image.tmdb.org/t/p/w185/' + response.data.results[num].poster_path
    // console.log(poster)
    // this.message = poster
      
    //   this.$nextTick(function () {
        
    //   })
    // })
    // .catch(e => {
      
    //   console.log(e)
    // })

      
    // },
    // getPosterInfo: ()=>{
      
    //   axios.get('http://localhost:5000/api/movies')
    //   .then(response => {
    //   let num = Math.floor(Math.random() * Math.floor(20))
       
   
    // console.log(response.data.results[num].poster_path)
    // })
    // .catch(e => {
      
    //   console.log(e)
    // })

    // },
    // submitPay: ()=>{
      
    //   axios.post('http://localhost:5000/api/square')
    //   .then(response => {
      
       
   
    // console.log(response.data)
    // })
    // .catch(e => {
      
    //   console.log(e)
    // })

    // }
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
