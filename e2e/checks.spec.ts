import { expect } from '@playwright/test'
import { checkMock } from '@/utils/mocks'
import { test } from './utils'

test('renders table with all headers', async ({ page }) => {
  await page.goto('/')
  const table = page.locator('table')

  await expect(table.getByText('TYPE')).toBeVisible()
  await expect(table.getByText('NAME')).toBeVisible()
  await expect(table.getByText('SUCCESS')).toBeVisible()
  await expect(table.getByText('AVG')).toBeVisible()
  await expect(table.getByText('P95')).toBeVisible()
  await expect(table.getByText('P99')).toBeVisible()
})

test('informs user of error fetching checks', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('There was an error loading your checks.')).toBeVisible()
})

test('populates table with checks', async ({ page, mockFetch }) => {
  mockFetch('http://localhost:3000/checks', [checkMock])
  await page.goto('/')

  const tbody = page.locator('tbody')
  await expect(tbody.getByText(checkMock.name)).toBeVisible()
})
