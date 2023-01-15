<template>
  <div id="app">
    <NavBar/>
    <RouterView />
    <Footer/>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>

<style scoped>
</style>
 