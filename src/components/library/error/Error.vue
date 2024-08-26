<template>
  <div class="error-message">
    <Icon name="alert" :width="32" />
    <span>{{ $t(`error.${type}`) }}</span>
    <span>{{ $t('error.try-later') }}</span>
  </div>
</template>

<script setup lang="ts">
import Icon from '../icon/Icon.vue'

defineProps<{
  /** Translatable error string */
  type: string
}>()
</script>

<style scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
</style>
