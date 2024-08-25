import { test as base } from '@playwright/test'
import { checkMock, checkStatsMock } from '@/utils/mocks'

export const test = base.extend({
  mockChecks: async ({ page }, use) => {
    await use(async () => {
      await page.route('http://localhost:3000/checks', async route => {
        await route.fulfill({ json: [checkMock] })
      })
    })
  },
  mockCheckStats: async ({ page }, use) => {
    await use(async () => {
      await page.route(/\/check_stats/, async route => {
        await route.fulfill({ json: [checkStatsMock] })
      })
    })
  }
})

export default test
