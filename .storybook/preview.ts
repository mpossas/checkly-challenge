import { setup, type Preview } from '@storybook/vue3'
import i18n from '@/config/i18n'
import '@/assets/style.css'

setup((app) => {
  app.use(i18n)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
}

export default preview
