<template>
  <div class="error-message">
    <Icon name="alert" :width="32" />
    <span>{{ $t(errorMessage) }}</span>
    <span>{{ $t('error.try-later') }}</span>
  </div>
</template>

<script setup lang="ts">
import Icon from '@/components/library/icon/Icon.vue'

defineProps<{ errorMessage: string }>()
</script>

<style scoped>
.error-message {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
}
</style>
