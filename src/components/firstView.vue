<template>
  <div>
      <!-- <canvas id="canvas"></canvas> -->
      <h2>first route</h2>
      
      
  </div>
</template>

<script>
// import ParticleFlow from '../particleClasses/particleFlow';
import MainParticleView from '../particleClasses/mainParticleView';

export default {
  name: 'firstView',
  props: {
    msg1: String
  },
  components: {
    MainParticleView
  },
  mounted: function(){
      MainParticleView();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
