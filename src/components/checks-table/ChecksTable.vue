<template>
  <table>
    <thead>
      <tr>
        <th v-for="(header, index) in tableHeaders" :key="index" scope="col">
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody v-if="hasChecks">
      <ChecksTableRow v-for="check in checks" :key="check.id" :check="check" />
    </tbody>
    <tbody v-else>
      <tr>
        <td colspan="6">
          <Error type="checks" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { fetchChecks } from '@/services/checks'
import type { Check } from '@/services/interfaces'
import { useTable } from '@/composables/table'
import Error from '@/components/library/error/Error.vue'
import ChecksTableRow from './row/ChecksTableRow.vue'

const { tableHeaders } = useTable()

const checks = ref<Check[] | undefined>([])

const hasChecks = computed(() => !!checks.value)

onMounted(async () => {
  checks.value = await fetchChecks()
})
</script>

<style scoped>
table {
  width: 100%;
  margin-top: 2rem;
  border-collapse: collapse;

  thead {
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
      @media (min-width: 720px) {
        width: 50%;
      }
    }
  }

  @media (max-width: 720px) {
    thead {
      display: none;
    }
  }
}
</style>
