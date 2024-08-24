import { mountComponent } from '@/utils/tests'
import StatsCharts from "./StatsCharts.vue"

describe('StatsCharts', () => {
  const wrapper = mountComponent(StatsCharts, { checkId: 'test-id' })

  it('displays "response time" chart by default', () => {
    expect(wrapper.find('#response-time-test-id').isVisible()).toBe(true)
    expect(wrapper.find('#success-ratio-test-id').isVisible()).toBe(false)
  })

  it('toggles visible chart', async () => {
    await wrapper.find('[data-testid="success-ratio"]').trigger('click')

    expect(wrapper.find('#success-ratio-test-id').isVisible()).toBe(true)
    expect(wrapper.find('#response-time-test-id').isVisible()).toBe(false)
  })
})
