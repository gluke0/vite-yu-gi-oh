<script >
  import headerY from './components/headerY.vue'
  import mainY from './components/mainY.vue'

  export default {
    
    components:{
      headerY,
      mainY,
    }
  }
</script>

<template>

  <div>
    <headerY></headerY>
    <mainY></mainY>
  </div>
  
</template>


<style lang="scss">
@use './style/main.scss';
</style>
