import { test, expect } from '@playwright/test'
import { ReportingPage } from 'pages/reporting.page'

test.beforeEach(async ({ page }) => await page.goto('/'))

test('changes color theme', async ({ page }) => {
  const reporting = new ReportingPage(page)

  await expect(reporting.body).toHaveAttribute('data-theme', 'light')
  await reporting.toggleTheme()
  await expect(reporting.body).toHaveAttribute('data-theme', 'dark')
})

test('changes language', async ({ page }) => {
  const reporting = new ReportingPage(page)

  await expect(reporting.title).toHaveText('Reporting')
  await reporting.changeLanguage('PT')
  await expect(reporting.title).toHaveText('Relatórios')
})
