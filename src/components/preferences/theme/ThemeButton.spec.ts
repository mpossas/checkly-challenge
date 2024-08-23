import { mountComponent } from '@/utils/tests'
import ThemeButton from './ThemeButton.vue'

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(() => ({
    matches: false,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
  })),
})

describe('ThemeButton', () => {
  it('toggles color theme on click', async () => {
    const wrapper = mountComponent(ThemeButton)

    expect(document.body.dataset.theme).toBe('light')

    await wrapper.find('button').trigger('click')

    expect(document.body.dataset.theme).toBe('dark')
  })
})
