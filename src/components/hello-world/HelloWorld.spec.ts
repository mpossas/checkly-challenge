import { mountComponent } from '@/utils/tests'
import HelloWorld from './HelloWorld.vue'

const apiResponseMock = { data: '' }

vi.mock('@/services/checks', () => ({
  fetchChecks: vi.fn().mockResolvedValue(apiResponseMock),
  fetchCheckStats: vi.fn().mockResolvedValue(apiResponseMock)
}))

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mountComponent(HelloWorld)
    expect(wrapper.text()).toContain('Reporting')
  })
})
