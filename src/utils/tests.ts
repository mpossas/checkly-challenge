import { mount, shallowMount } from '@vue/test-utils'
import type { Check } from '@/services/interfaces'
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
    attachTo: document.body
  })
}

export const shallowMountComponent = (
  Component: object,
  props?: Record<string, unknown>
) => {
  return shallowMount(Component, {
    props,
    global: {
      plugins: [i18n]
    },
    attachTo: document.body
  })
}

export const checkMock: Check = {
  id: 'fa0e2ef4-cc16-44b6-be49-0d60037f075f',
  name: 'Check 0',
  type: 'BROWSER',
  success: 0.5008333333333334,
  avg: 499.5816,
  p95: 948,
  p99: 989
}
