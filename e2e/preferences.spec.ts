import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => await page.goto('/'))

test('changes color theme', async ({ page }) => {
  await expect(page.locator('body')).toHaveAttribute('data-theme', 'light')

  const themeButton = page.locator('aside > button')
  await themeButton.click()

  await expect(page.locator('body')).toHaveAttribute('data-theme', 'dark')
})

test('changes language', async ({ page }) => {
  await expect(page.locator('h1')).toHaveText('Reporting')

  const languageSelect = page.locator('aside > select')
  await languageSelect.selectOption('PT')

  await expect(page.locator('h1')).toHaveText('Relatórios')
})
