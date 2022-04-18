<template>
  <div>
    show : {{ show }}
    <div v-show="show">{{ message }}</div> 
    <button @click="change">버튼</button> 
    
  </div>
</template>

<script>
export default {
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