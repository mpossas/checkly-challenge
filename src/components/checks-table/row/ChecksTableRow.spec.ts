import { fetchCheckStats } from "@/services/checks"
import { toMilliseconds, toPercentage } from "@/utils/metrics"
import { checkMock, shallowMountComponent } from "@/utils/tests"
import ChecksTableRow from "./ChecksTableRow.vue"

vi.mock('@/services/checks', () => ({
  fetchCheckStats: vi.fn().mockResolvedValue(undefined),
}))

describe('ChecksTableRow', () => {
  const wrapper = shallowMountComponent(ChecksTableRow, { check: checkMock })
  const statsCharts = wrapper.findComponent('stats-charts-stub')
  const checkRow = wrapper.find('tr')

  it('displays check data', () => {
    const textContent = checkRow.text()

    expect(textContent).toContain(checkMock.type)
    expect(textContent).toContain(checkMock.name)
    expect(textContent).toContain(toPercentage(checkMock.success))
    expect(textContent).toContain(toMilliseconds(checkMock.avg))
    expect(textContent).toContain(toMilliseconds(checkMock.p95))
    expect(textContent).toContain(toMilliseconds(checkMock.p99))
  })

  it('creates hidden row with empty charts', () => {
    expect(statsCharts.exists()).toBe(true)
    expect(statsCharts.isVisible()).toBe(false)
  })

  it('collapses row and plots the charts', async () => {
    await checkRow.trigger('click')

    expect(fetchCheckStats).toHaveBeenCalled()
    expect(statsCharts.isVisible()).toBe(true)
  })
})
