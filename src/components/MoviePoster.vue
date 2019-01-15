<template>
  <div>
      <p>{{poster_path}}</p>
      
  </div>
</template>

<script>


export default {
  name: 'firstView',
  props: {
    poster_path: String
  },
  
    
   
//   components: {
//     ParticleFlow
//   },
//   mounted: function(){
//       MainParticleView();
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>