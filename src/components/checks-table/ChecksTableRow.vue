<template>
  <tr @click="toggleChartsView()">
    <td>
      <Icon :name="chevronType" class="chevron-icon" />
      <span class="table-header">{{ tableHeaders.type }}</span>
      <span>{{ check.type }}</span>
    </td>
    <td>
      <span class="table-header">{{ tableHeaders.name }}</span>
      <span>{{ check.name }}</span>
    </td>
    <td>
      <span class="table-header">{{ tableHeaders.success }}</span>
      <span>{{ toPercentage(check.success) }}%</span>
    </td>
    <td>
      <span class="table-header">{{ tableHeaders.avg }}</span>
      <span>{{ toMilliseconds(check.avg) }}ms</span>
    </td>
    <td>
      <span class="table-header">{{ tableHeaders.p95 }}</span>
      <span>{{ toMilliseconds(check.p95) }}ms</span>
    </td>
    <td>
      <span class="table-header">{{ tableHeaders.p99 }}</span>
      <span>{{ toMilliseconds(check.p99) }}ms</span>
    </td>
  </tr>
  <Transition>
    <tr v-show="displayCharts">
      <td colspan="6" class="charts-view">
        <StatsCharts :checkId="check.id" />
      </td>
    </tr>
  </Transition>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { Check } from '@/services/interfaces'
import { toPercentage, toMilliseconds } from '@/utils/metrics'
import { useStatsCharts } from '@/composables/charts'
import { useTable } from '@/composables/table'
import Icon from '@/components/library/icon/Icon.vue'
import StatsCharts from '@/components/stats-charts/StatsCharts.vue'

const { check } = defineProps<{ check: Check }>()

const displayCharts = ref(false)

const { tableHeaders } = useTable()
const { plotStatsCharts } = useStatsCharts()

const chevronType = computed(() => displayCharts.value ? 'chevron-down' : 'chevron-right')

const toggleChartsView = async () => {
  displayCharts.value = !displayCharts.value
  // Only plot charts when opening
  if (displayCharts.value) plotStatsCharts(check.id)
}
</script>

<style scoped>
tr {
  cursor: pointer;
  border-bottom: 1px solid var(--nav-bar-background);
}

td {
  text-align: center;
  padding: 1rem 0 0.5rem 0;
}

td:nth-of-type(1):not(.charts-view) {
  text-align: left;

  display: flex;
  align-items: center;
  gap: 3px;
}

td:nth-of-type(2) {
  text-align: left;

  @media (min-width: 720px) {
    width: 50%;
  }
}

.table-header {
  display: none;
}

/* Mobile version */
@media (max-width: 720px) {
  tr {
    display: flex;
    flex-direction: column;
    align-items: baseline;

    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--nav-bar-item-background);
  }

  td {
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    padding: 0 0 0.5rem 0;
  }

  .chevron-icon {
    display: none !important;
  }

  .table-header {
    display: block;
  }

  .charts-view {
    padding: 0.5rem 0;
  }
}

/* Animation */
.v-enter-active {
  transition: opacity 1s ease;
}
.v-enter-from {
  opacity: 0;
}
</style>
