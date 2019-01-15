<template>
  <div>
      <canvas id="canvas"></canvas>
      
      
      
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
