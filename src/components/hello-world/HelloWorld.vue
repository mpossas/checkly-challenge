<template>
  <h1>{{ $t('reporting.title') }}</h1>
  <section>
    <ThemeButton />
    <LocaleSelector />
  </section>
</template>

<script setup lang="ts">
import ThemeButton from '@/components/preferences/theme/ThemeButton.vue'
import LocaleSelector from '@/components/preferences/locale/LocaleSelector.vue'
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
