<template>
  <tr @click="toggleChartsView()">
    <td>
      <Icon :name="chevronType" />
      {{ check.type }}
    </td>
    <td>{{ check.name }}</td>
    <td>{{ toPercentage(check.success) }}%</td>
    <td>{{ toMilliseconds(check.avg) }}ms</td>
    <td>{{ toMilliseconds(check.p95) }}ms</td>
    <td>{{ toMilliseconds(check.p99) }}ms</td>
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
import Icon from '@/components/library/icon/Icon.vue'
import StatsCharts from '@/components/stats-charts/StatsCharts.vue'

const { check } = defineProps<{ check: Check }>()
const displayCharts = ref(false)

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
  width: 50%;
}

/* Animation */
.v-enter-active {
  transition: opacity 1s ease;
}
.v-enter-from {
  opacity: 0;
}
</style>
