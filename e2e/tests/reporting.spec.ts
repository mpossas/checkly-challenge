import { test, expect } from '@playwright/test'
import { ReportingPage } from 'pages/reporting.page'

test.beforeEach(async ({ page }) => await page.goto('/'))

test('displays heading text', async ({ page }) => {
  const { title, description } = new ReportingPage(page)

  await expect(title).toHaveText('Reporting')
  await expect(description).toHaveText(/Analyse long term performance/)
})

test('navigates to reporting page', async ({ page }) => {
  const { pageLink } = new ReportingPage(page)

  await expect(pageLink).toHaveText('REPORTING')

  const initialUrl = page.url()
  await pageLink.click()
  expect(initialUrl).toBe(page.url())
})
