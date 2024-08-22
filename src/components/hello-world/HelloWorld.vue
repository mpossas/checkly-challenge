<template>
  <article>
    <h1>{{ $t('reporting.title') }}</h1>
    <ChecksTable />
  </article>
</template>

<script setup lang="ts">
import ChecksTable from '@/components/checks-table/ChecksTable.vue'
</script>
