<template>
  <div>
      <!-- <canvas id="canvas"></canvas> -->
      <h2>first route</h2>
      <div v-bind:key="movie.id" v-for=" movie in this.$store.state.posterPath">
        <img v-bind:src="'http://image.tmdb.org/t/p/w185/' + movie.poster_path"/>
        <!-- http://image.tmdb.org/t/p/w185/{{movie.poster_path}} -->
      </div>
      <!-- 'http://image.tmdb.org/t/p/w185/' -->
      <Todos/>
  </div>
</template>

<script>
// import ParticleFlow from '../particleClasses/particleFlow';
import MainParticleView from '../particleClasses/mainParticleView';
import { mapGetters, mapActions, mapMutations } from 'vuex'
import Todos from './Todos';

export default {
  name: 'firstView',
  props: {
    // msg1: String
  },
  components: {
    Todos
  },
  mounted: function(){
      this.$store.dispatch('getPosterPath')
  },
  computed: mapGetters([
    'movies'
  ]),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
