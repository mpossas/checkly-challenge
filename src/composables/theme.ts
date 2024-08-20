import { onMounted, onUnmounted, ref } from 'vue'

export const useColorTheme = () => {
  const colorTheme = window.matchMedia('(prefers-color-scheme: dark)')
  const inDarkTheme = ref(colorTheme.matches)

  const setColorTheme = (prefersDark = inDarkTheme.value) => {
    document.body.dataset.theme = prefersDark ? 'dark' : 'light'
    inDarkTheme.value = prefersDark
  }

  const handleThemeChange = (e: MediaQueryListEvent) => setColorTheme(e.matches)

  onMounted(() => colorTheme.addEventListener('change', handleThemeChange))
  onUnmounted(() => colorTheme.removeEventListener('change', handleThemeChange))

  return { inDarkTheme, setColorTheme }
}
