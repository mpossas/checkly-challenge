<template>
  <h1>{{ $t('reporting.title') }}</h1>
  <section>
    <ThemeButton />
    <LocaleSelector />
  </section>
  <ul>
    <li v-for="{ id, name } in checks" :key="id">
      <details @toggle="(e: ToggleEvent) => getCheckStats(e, id)">
        <summary>{{ name }}</summary>
        <p :id="id"></p>
      </details>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { fetchChecks, fetchCheckStats } from '@/services/checks'
import type { Check, CheckId } from '@/services/interfaces'
import ThemeButton from '@/components/preferences/theme/ThemeButton.vue'
import LocaleSelector from '@/components/preferences/locale/LocaleSelector.vue'

const checks = ref<Check[]>([])

onMounted(async () => {
  const response = await fetchChecks()
  checks.value = response.data
})

const getCheckStats = async (e: ToggleEvent, checkId: CheckId) => {
  // Prevents fetching when closing the chart view
  if (e.newState === 'closed') return

  const response = await fetchCheckStats(checkId)
  const chartView = document.getElementById(checkId) as HTMLElement
  chartView.innerHTML = `${response.data.length}`
}
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
</style>
