<template>
  <div id="app">
    <!-- <tool-bar></tool-bar> -->
    <Toolbar></Toolbar>
    <router-view></router-view>
  </div>
</template>

<script>
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


