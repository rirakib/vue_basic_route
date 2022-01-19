<template>
    <div>
        <h1>This is Home Page</h1>

        <p><router-link to="user/1">Rakib</router-link></p>
        <p><router-link to="user/2">Riyad</router-link></p>
        <p><router-link to="user/3">Santo</router-link></p>
        <p><router-link to="user/4">Riaz</router-link></p>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>