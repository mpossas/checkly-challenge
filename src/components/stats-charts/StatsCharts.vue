<template>
  <article>
    <section>
      <button
        data-testid="response-time-button"
        :class="{ active: showResponseTime }"
        @click="displayChart(RESPONSE_TIME)"
      >
        {{ $t('metrics.response-time') }}
      </button>
      <button
        data-testid="success-ratio-button"
        :class="{ active: showSuccessRatio }"
        @click="displayChart(SUCCESS_RATIO)"
      >
        {{ $t('metrics.success-ratio') }}
      </button>
    </section>
    <figure v-show="showResponseTime" :id="`response-time-${checkId}`"></figure>
    <figure v-show="showSuccessRatio" :id="`success-ratio-${checkId}`"></figure>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CheckId } from '@/services/interfaces'

const RESPONSE_TIME = 0
const SUCCESS_RATIO = 1

defineProps<{ checkId: CheckId }>()

const activeChart = ref(0)

const showResponseTime = computed(() => activeChart.value === RESPONSE_TIME)
const showSuccessRatio = computed(() => activeChart.value === SUCCESS_RATIO)

const displayChart = (chartType: number) => {
  activeChart.value = chartType
}
</script>

<style scoped>
article {
  padding: 1rem;
}

section {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
}

button {
  border: none;
  cursor: pointer;

  color: var(--button-text);
  background-color: inherit;
}

button.active {
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: var(--button-background);
}

figure {
  margin: 0.5rem 0;
}
</style>
