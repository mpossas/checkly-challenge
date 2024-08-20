import { mountComponent } from '@/utils/tests'
import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mountComponent(HelloWorld)
    expect(wrapper.text()).toContain('Reporting')
  })
})
