<template>
<<<<<<< HEAD
  <div>
    안녕
    <toolbar></toolbar>
  <router-view></router-view>
=======
  <div id="app">
    <!-- <tool-bar></tool-bar> -->
    <Toolbar></Toolbar>
    <router-view></router-view>
>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5
  </div>
</template>

<script>
<<<<<<< HEAD
import Toolbar from './components/Toolbar.vue'

export default {
  components: { 
    Toolbar 
  },
  
}
</script>



Toolbar
=======
import Toolbar from './components/Toolbar.vue';

export default {
  name: 'App',
  components: {
    Toolbar,
  }
}
</script>
<style scoped>
body {
  padding : 0;
  margin : 0
}
</style>


>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5
