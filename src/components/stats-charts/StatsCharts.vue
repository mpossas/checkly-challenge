<template>
  <article>
    <ToggleButtons :options="charts" @change="displayChart" />
    <figure v-show="showResponseTime" :id="`${RESPONSE_TIME}-${checkId}`">
      <Error type="check-stats"/>
    </figure>
    <figure v-show="showSuccessRatio" :id="`${SUCCESS_RATIO}-${checkId}`">
      <Error type="check-stats"/>
    </figure>
  </article>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import type { CheckId } from '@/services/interfaces'
import ToggleButtons from '@/components/library/toggle-buttons/ToggleButtons.vue'
import Error from '@/components/library/error/Error.vue'

const RESPONSE_TIME = 'response-time'
const SUCCESS_RATIO = 'success-ratio'

const charts = [
  RESPONSE_TIME,
  SUCCESS_RATIO
]

defineProps<{ checkId: CheckId }>()

const activeChart = ref(RESPONSE_TIME)

const showResponseTime = computed(() => activeChart.value === RESPONSE_TIME)
const showSuccessRatio = computed(() => activeChart.value === SUCCESS_RATIO)

const displayChart = (metric: string) => {
  activeChart.value = metric
}
</script>

<style scoped>
article {
  cursor: default;
  width: 100%;
}

.toggle-buttons {
  justify-content: flex-end;
}

figure {
  margin: 0.5rem 0;
}
</style>
