import { Locator, Page } from '@playwright/test'
import { ChecksSection } from './checks.section'

export class ReportingPage {
  readonly page: Page
  readonly body: Locator
  readonly title: Locator
  readonly description: Locator
  readonly pageLink: Locator
  readonly checks: ChecksSection

  constructor(page: Page) {
    this.page = page
    this.body = page.locator('body')
    this.title = page.locator('h1')
    this.description = page.locator('h2')
    this.pageLink = page.locator('nav > a')
    this.checks = new ChecksSection(page)
  }

  async toggleTheme() {
    const themeButton = this.page.locator('aside > button')
    await themeButton.click()
  }

  async changeLanguage(language: string) {
    const languageSelect = this.page.locator('aside > select')
    await languageSelect.selectOption(language)
  }
}
