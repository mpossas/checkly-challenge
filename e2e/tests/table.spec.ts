import { expect } from '@playwright/test'
import { checkMock } from '@/utils/mocks'
import { test } from 'utils/test'
import { ReportingPage } from 'pages/reporting.page'

test('renders all table headers', async ({ page }) => {
  const { checks } = new ReportingPage(page)
  await page.goto('/')

  await expect(checks.getHeader('TYPE')).toBeVisible()
  await expect(checks.getHeader('NAME')).toBeVisible()
  await expect(checks.getHeader('SUCCESS')).toBeVisible()
  await expect(checks.getHeader('AVG')).toBeVisible()
  await expect(checks.getHeader('P95')).toBeVisible()
  await expect(checks.getHeader('P99')).toBeVisible()
})

test('informs user of error fetching checks', async ({ page }) => {
  const { checks } = new ReportingPage(page)

  await page.goto('/')
  await expect(checks.errorMessage).toBeVisible()
})

test('populates table with checks', async ({ page, mockChecks }) => {
  const { checks } = new ReportingPage(page)
  await mockChecks()

  await page.goto('/')
  await expect(checks.table.getByText(checkMock.name)).toBeVisible()
})
