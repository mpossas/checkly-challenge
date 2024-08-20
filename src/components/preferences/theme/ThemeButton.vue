<template>
  <button
    :aria-label="$t('button.theme')"
    @click="toggleTheme"
  >
    <Icon :name="themeIcon" :width="16"/>
  </button>
</template>

<script setup lang="ts">
import { computed, onBeforeMount } from 'vue'
import { useColorTheme } from '@/composables/theme'
import Icon from '@/components/library/icon/Icon.vue'

const { inDarkTheme, setColorTheme } = useColorTheme()

const themeIcon = computed(() => inDarkTheme.value ? 'moon' : 'sun')

const toggleTheme = () => setColorTheme(!inDarkTheme.value)

onBeforeMount(() => setColorTheme())
</script>

<style scoped>
button {
  border: none;
  background: none;
  cursor: pointer;
}
</style>
