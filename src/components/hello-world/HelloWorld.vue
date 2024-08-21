<template>
  <h1>{{ $t('reporting.title') }}</h1>
  <section>
    <ThemeButton />
    <LocaleSelector />
  </section>
  <ul>
    <li v-for="{ id, name } in checks" :key="id">
      <details @toggle="(e: ToggleEvent) => toggleChartsView(e, id)">
        <summary>{{ name }}</summary>
        <StatsCharts :checkId="id" />
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchChecks } from '@/services/checks'
import type { Check, CheckId } from '@/services/interfaces'
import { useStatsCharts } from '@/composables/charts'
import ThemeButton from '@/components/preferences/theme/ThemeButton.vue'
import LocaleSelector from '@/components/preferences/locale/LocaleSelector.vue'
import StatsCharts from '@/components/stats-charts/StatsCharts.vue'

const checks = ref<Check[] | undefined>([])

const { plotStatsCharts } = useStatsCharts()

onMounted(async () => {
  checks.value = await fetchChecks()
})

const toggleChartsView = async (e: ToggleEvent, checkId: CheckId) => {
  // Prevents fetching when closing the chart view
  if (e.newState === 'closed') return

  plotStatsCharts(checkId)
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
