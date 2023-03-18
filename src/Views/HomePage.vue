<template>
    <div>
        <h1>Home</h1>
        <p>{{ name }}</p>
        <p>This is the <strong>Home</strong> page</p>
        <router-link to="/AboutPage">About Page</router-link>
    </div>
</template>
<script setup>
 import {ref} from "@vue/reactivity";
 const name= ref("kennny");
</script>