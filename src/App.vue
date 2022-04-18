<template>
  <div>
    안녕
    <toolbar></toolbar>
  <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  components: { 
    Toolbar 
  },
  
}
</script>



Toolbar