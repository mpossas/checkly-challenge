import { mountComponent } from '@/utils/tests'
import HelloWorld from './HelloWorld.vue'

vi.mock('@/services/checks', () => ({
  fetchChecks: vi.fn().mockResolvedValue({ data: '' }),
  fetchCheckStats: vi.fn().mockResolvedValue({ data: '' })
}))

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mountComponent(HelloWorld)
    expect(wrapper.text()).toContain('Reporting')
  })
})
