<template>
  <div>
<<<<<<< HEAD
    show : {{ show }}
    <div v-show="show">{{ message }}</div> 
    <button @click="change">버튼</button> 
    
=======
    안녕
>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5
  </div>
</template>

<script>
export default {
<<<<<<< HEAD
  data(){
    return {
      message : "나 여깃지~",
      show : true
    }
  },
  methods: {
    change() {
      this.show = !this.show
    }
  },

}
</script>
=======
  
  data(){
    return {
    }
  },
  methods: {

  },
  computed: {
    
  }

}
</script>

>>>>>>> e28b04fc79db9670f0b0ad6afc2a68e1bc24d5f5
