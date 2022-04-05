<template>
    <div class="header">
        <router-link to="/contact">Contact</router-link>  |
        <router-link to="/product">Product</router-link>  |
        <router-link to="/history">History</router-link>  
    </div>
</template>
<script>
export default {
    
}
</script>

<style scoped>
.header {
    color:white;
    background-color: olivedrab;
    display: flex;
    padding: 10px;
}

.header .router-link-exact-active{
    color: #35495e;
}

</style>