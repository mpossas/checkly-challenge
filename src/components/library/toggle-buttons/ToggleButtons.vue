<template>
  <div class="toggle-buttons">
    <button
      v-for="(option, index) in options"
      :key="index"
      :class="{ selected: currentOption === option }"
      :data-testid="option"
      @click="changeOption(option)"
    >
      {{ $t(`metrics.${option}`) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const { options } = defineProps<{
  /** Array of translatable metric strings */
  options: string[]
}>()

const currentOption = ref(options[0])

const emit = defineEmits<{
  /** Emitted when an option is selected */
  (event: 'change', option: string): void
}>()

const changeOption = (option: string) => {
  currentOption.value = option
  emit('change', option)
}
</script>

<style scoped>
.toggle-buttons {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

button {
  border: none;
  cursor: pointer;
  font-size: 12px;

  color: var(--button--text);
  background-color: inherit;
}

button.selected {
  font-weight: 600;
  padding: 2px 5px;
  border-radius: 5px;
  background-color: var(--button);
}
</style>
