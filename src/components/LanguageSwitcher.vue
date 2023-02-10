<script lang="ts">
  export default {
    name: "LanguageSwitcher",
    data() {
      return { locales: ["pt", "en", "ja"] };
    }
  };
</script>
<template>
    <select v-model="$i18n.locale">
      <option v-for="(locale, i) in locales" :key="`locale-${i}`" :value="locale">
        {{ locale }}
      </option>
    </select>
</template>
  