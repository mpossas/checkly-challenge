import { mount } from '@vue/test-utils'
import i18n from '@/config/i18n'

export const mountComponent = (
  Component: object,
  props?: Record<string, unknown>
) => {
  return mount(Component, {
    props,
    global: {
      plugins: [i18n]
    },
  })
}

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(() => ({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  })
})
