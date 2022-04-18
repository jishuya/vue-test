<template>
    <div class="header">
        <router-link to='history'>History</router-link>  |  
        <router-link to='thisweek'>ThisWeek</router-link>  |  
        <router-link to='nextweek'>NextWeek</router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.header{
    color: white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}

.header .router-link-exact-active{
    color: #35495e;
}
</style>