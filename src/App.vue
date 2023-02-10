<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavbarVue from './components/Navbar.vue';
</script>

<template>
  <div class="app">
    <header>
      <NavbarVue />
    </header>
    <RouterView />
  </div>
</template>

<style>
.app {
  display: flex;
  flex-direction: column;
}
</style>
