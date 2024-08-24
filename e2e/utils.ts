import { test as base } from '@playwright/test'

export const test = base.extend({
  mockFetch: async ({ page }, use) => {
    await use(async (url: string, data: any) => {
      await page.route(url, async route => {
        await route.fulfill({ json: data })
      })
    })
  }
})
