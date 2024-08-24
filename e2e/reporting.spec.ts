import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => await page.goto('/'))

test('navigates to reporting page', async ({ page }) => {
  const initialUrl = page.url()
  const pageLink = page.locator('nav > a')

  await expect(pageLink).toHaveText('REPORTING')
  await pageLink.click()

  expect(initialUrl).toBe(page.url())
})

test('displays heading text', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Reporting')
  await expect(page.locator('h2')).toHaveText(/Analyse long term performance/)
})
