<template>
  <div>
      <h1>{{msg2}}</h1>
      
  </div>
</template>

<script>


export default {
  name: 'firstView',
  props: {
    msg2: String
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