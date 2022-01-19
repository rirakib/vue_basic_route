<template>
    <div>
        <h1>This is user Page</h1>
        <h1>User id is {{userId}}</h1>
    </div>
</template>

<script>
export default {
    name:'User',
    data(){
        return{
            userId:this.$route.params.id
        }
    }
}
</script>