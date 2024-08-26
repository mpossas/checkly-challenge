<template>
  <select v-model="locale" :aria-label="$t('select.language')">
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
  background-color: var(--dashboard);
  color: var(--dashboard--text);

  padding: 0.15rem 0.25rem;
}
</style>
