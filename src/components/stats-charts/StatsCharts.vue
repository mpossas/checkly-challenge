<template>
  <figure>
    <div :id="`response-time-${checkId}`"></div>
  </figure>
  <figure>
    <div :id="`success-${checkId}`"></div>
  </figure>
</template>

<script setup lang="ts">
import type { CheckId } from '@/services/interfaces'

defineProps<{ checkId: CheckId }>()
</script>
