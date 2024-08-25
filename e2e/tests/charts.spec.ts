import { expect } from '@playwright/test'
import { checkMock } from '@/utils/mocks'
import { test } from 'utils/test'
import { ReportingPage } from 'pages/reporting.page'

test.beforeEach(async ({ page, mockChecks }) => {
  await mockChecks()
  await page.goto('/')
})

test('informs user of error fetching check stats', async ({ page }) => {
  const { checks } = new ReportingPage(page)

  await checks.clickCheck(checkMock.name)
  await expect(checks.errorMessage).toBeVisible()
})

test('plots response time chart', async ({ page, mockCheckStats }) => {
  const { checks } = new ReportingPage(page)
  await mockCheckStats()

  await checks.clickCheck(checkMock.name)
  await expect(checks.responseTimeChart).toBeVisible()
})

test('plots success ratio chart', async ({ page, mockCheckStats }) => {
  const { checks } = new ReportingPage(page)
  await mockCheckStats()

  await checks.clickCheck(checkMock.name)
  await checks.selectChart('success-ratio')
  await expect(checks.successRatioChart).toBeVisible()
})
