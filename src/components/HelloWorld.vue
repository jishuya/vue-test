<template>
  <div>
    {{ reversedMessage }}
    <button @click="change">Change</button>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
      message: '안녕하세요 '
    }
  },
  methods: {
    // reversedMessage(){
    //   this.message.split('').reverse().join('')
    // }
    change(){
      this.message = '반갑습니다'
    }
  },
  computed: {
    reversedMessage(){
      return this.message.split('').reverse().join('')
    }
  }

}
</script>

