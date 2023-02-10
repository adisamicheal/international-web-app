<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
</script>

<template>
    <nav>
        <div class="logo">Internationalization</div>
        <LanguageSwitcher />
    </nav>
</template>

<style>
nav {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
}
</style>