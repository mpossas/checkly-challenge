<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in headers" :key="index" scope="col">
          {{ $t(header).toUpperCase() }}
        </th>
      </tr>
    </thead>
    <tbody>
      <ChecksTableRow v-for="check in checks" :key="check.id" :check="check" />
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchChecks } from '@/services/checks'
import type { Check } from '@/services/interfaces'
import ChecksTableRow from './ChecksTableRow.vue'

const headers = [
  'check.type',
  'check.name',
  'metrics.success-ratio',
  'metrics.avg',
  'metrics.p95',
  'metrics.p99'
]

const checks = ref<Check[] | undefined>([])

onMounted(async () => {
  checks.value = await fetchChecks()
})
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid var(--dashboard-text);
  }

  th {
    font-weight: normal;
    padding-bottom: 0.5rem;
  }

  th:nth-of-type(1),
  th:nth-of-type(2) {
    text-align: left;
  }

  th:nth-of-type(2) {
    width: 50%;
  }
}
</style>
