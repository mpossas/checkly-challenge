import { expect } from '@playwright/test'
import { test } from './utils'
import { checkMock, checkStatsMock } from '@/utils/mocks'

test.beforeEach(async ({ page, mockFetch }) => {
  mockFetch('http://localhost:3000/checks', [checkMock])
  await page.goto('/')
})

test('informs user of error fetching check stats', async ({ page }) => {
  const check = page.getByText(checkMock.name)
  await check.click()

  await expect(page
    .getByText('There was an error loading your check stats.')
    .locator('visible=true'))
  .toBeVisible()
})

test('plots response time chart', async ({ page }) => {
  await page.route(/\/check_stats/, async route => {
    await route.fulfill({ json: [checkStatsMock] })
  })

  const check = page.getByText(checkMock.name)
  await check.click()

  const chart = page.locator(`#response-time-${checkMock.id}`)
  await expect(chart.locator('.highcharts-root')).toBeVisible()
})

test('plots success ratio chart', async ({ page }) => {
  await page.route(/\/check_stats/, async route => {
    await route.fulfill({ json: [checkStatsMock] })
  })

  const check = page.getByText(checkMock.name)
  await check.click()

  const successToggle = page.getByTestId('success-ratio')
  await successToggle.click()

  const chart = page.locator(`#success-ratio-${checkMock.id}`)
  await expect(chart.locator('.highcharts-root')).toBeVisible()
})
