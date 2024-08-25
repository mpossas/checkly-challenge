import { Locator, Page } from "@playwright/test"

export class ChecksSection {
  readonly page: Page
  readonly table: Locator
  readonly errorMessage: Locator
  readonly responseTimeChart: Locator
  readonly successRatioChart: Locator

  constructor(page: Page) {
    this.page = page
    this.table = page.getByRole('table')
    this.errorMessage = page.locator('.error-message').locator('visible=true')
    this.responseTimeChart = page.locator('[id*=response-time] .highcharts-root')
    this.successRatioChart = page.locator('[id*=success-ratio] .highcharts-root')
  }

  getHeader(headerName: string) {
    return this.table.getByText(headerName)
  }

  async clickCheck(checkName: string) {
    const check = this.table.getByText(checkName)
    await check.click()
  }

  async selectChart(chartName: string) {
    const toggleButton = this.page.getByTestId(chartName)
    await toggleButton.click()
  }
}
