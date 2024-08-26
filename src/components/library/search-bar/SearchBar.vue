<template>
  <div class="search-bar">
    <Icon name="search" :width="16" />
    <input
      v-model="search"
      type="search"
      :placeholder="$t('search-bar.placeholder')"
      @input="emit('input', search)"
    />
    <span>/</span>
    <button v-show="!!search" :aria-label="$t('button.clear')" @click="clearSearch">
      <Icon name="x" :width="12" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Icon from '@/components/library/icon/Icon.vue'

const search = ref('')

const clearSearch = () => {
  search.value = ''
}

const emit = defineEmits<{
  /** Emitted when text is typed */
  (event: 'input', search: string): void
}>()

const focusOnInput = (e: KeyboardEvent) => {
  if (e.key === '/') {
    e.preventDefault()
    document.querySelector<HTMLInputElement>('.search-bar > input')?.focus()
  }
}

onMounted(() => document.addEventListener('keydown', focusOnInput))
onUnmounted(() => document.removeEventListener('keydown', focusOnInput))
</script>

<style scoped>
.search-bar {
  display: flex;
  align-items: center;

  padding: 6px;
  font-size: 14px;
  width: fit-content;

  background-color: var(--search-bar-background);
  border: 1px solid var(--search-bar-background);
  border-radius: 4px;
}

.search-bar:focus-within {
  background-color: var(--active-search-bar-background);

  input {
    min-width: 200px;
  }

  span {
    visibility: hidden;
  }
}

.search-bar:not(:focus-within) button {
  display: none;
}

input {
  appearance: none;
  -webkit-appearance: none;

  border: none;
  outline: none;
  background-color: inherit;

  font-size: 14px;
  margin: 0 0.5rem;
  color: var(--dashboard-text);
}

input::placeholder {
  font-size: 14px;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  -webkit-appearance: none;
}

span {
  font-size: 14px;
  padding: 1px 5px;

  border-radius: 4px;
  background-color: var(--search-key-background);
}

button {
  padding: 0;
  border: none;
  cursor: pointer;

  color: var(--button-text);
  background-color: inherit;
}
</style>
