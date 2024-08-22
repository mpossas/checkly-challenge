<template>
  <aside>
    <ThemeButton />
    <LocaleSelector />
  </aside>
</template>

<script setup lang="ts">
import ThemeButton from '@/components/preferences/theme/ThemeButton.vue'
import LocaleSelector from '@/components/preferences/locale/LocaleSelector.vue'
</script>

<style scoped>
aside {
  display: flex;
  align-items: center;
  align-self: flex-end;
  gap: 0.5rem;

  margin-top: 1rem;
}
</style>
