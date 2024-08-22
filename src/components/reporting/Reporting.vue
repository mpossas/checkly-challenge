<template>
  <article>
    <h1>{{ $t('reporting.title') }}</h1>
    <h2>{{ $t('reporting.description') }}</h2>
    <ChecksTable />
  </article>
</template>

<script setup lang="ts">
import ChecksTable from '@/components/checks-table/ChecksTable.vue'
</script>

<style scoped>
h1 {
  font-size: 1.25rem;
  font-weight: normal;
}

h2 {
  font-size: inherit;
  font-weight: normal;
}
</style>
