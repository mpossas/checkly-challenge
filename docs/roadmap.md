---
outline: deep
---

# Roadmap

I refined the [challenge requirements](https://checkly.notion.site/Frontend-Coding-Challenge-Jun-24-78564587cbe94cf1afe155d3f7b57525) into a roadmap with the following steps:

## Setup

### Include translations

- Included English and Portuguese translations.

### Configure unit tests

- Created utility functions to handle `vue-i18n`.

### Include color themes

- Included "Light" and "Dark" color themes.

### Automate tests

- Automated unit and E2E tests with [GitHub Actions](https://github.com/mpossas/checkly-challenge/actions).

## Implementation

### Create API interface service

- Chose [axios over fetch](https://blog.logrocket.com/axios-vs-fetch-best-http-requests/) due to ease of use and built-in data transformations.
- Used json-server [built-in filters](https://www.npmjs.com/package/json-server/v/0.16.3#filter).

### Integrate Highcharts

- Chose to plot both charts at once to avoid calling Highcharts on demand.

### Create navigation bar

- Moves to the top of the page on mobile screens.

### Create checks table

- Completely responsive layout, rearranged on mobile screens.
- Animated collapsing rows.

## Validation

### E2E tests

- Created a fixture to [reuse the network mock](https://medium.com/@mahmoudhamdan_16578/playwright-fixtures-as-a-cleaner-way-of-fetching-resources-bd80fd2c87cd).
- Followed the [Page object model](https://playwright.dev/docs/pom).

### Create documentation

- Chose vitepress to generate the documentation pages.
