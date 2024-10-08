import { flushPromises } from '@vue/test-utils'
import { shallowMountComponent } from '@/utils/tests'
import { checkMock } from '@/utils/mocks'
import ChecksTable from './ChecksTable.vue'

vi.mock('@/services/checks', () => ({
  fetchChecks: vi.fn().mockResolvedValue([checkMock]),
}))

describe('ChecksTable', () => {
  it('lists checks', async () => {
    const wrapper = shallowMountComponent(ChecksTable)
    await flushPromises()

    expect(wrapper.findComponent('checks-table-row-stub').exists()).toBe(true)
  })
})
