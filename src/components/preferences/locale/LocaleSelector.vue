<template>
  <select v-model="locale">
    <option
      v-for="locale in availableLocales"
      :key="locale"
      :value="locale"
    >
      {{ locale.toUpperCase() }}
    </option>
  </select>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { locale, availableLocales } = useI18n()
</script>

<style scoped>
select {
  background-color: var(--background-color);
  color: var(--text-color);

  padding: 0.15rem 0.25rem;
}
</style>
