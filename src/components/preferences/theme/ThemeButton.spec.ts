import { mountComponent } from '@/utils/tests'
import ThemeButton from './ThemeButton.vue'

describe('ThemeButton', () => {
  it('toggles color theme on click', async () => {
    const wrapper = mountComponent(ThemeButton)

    expect(document.body.dataset.theme).toBe('light')

    await wrapper.find('button').trigger('click')

    expect(document.body.dataset.theme).toBe('dark')
  })
})
