// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  reporter: 'html',

  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'on',

    // ✅ Set locale here
    locale: 'en-US',

    // Optional: set timezone if needed
    timezoneId: 'America/New_York',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],

        // ✅ Locale must also be here to override device defaults
        locale: 'en-US',

        // Optional: timezone
        timezoneId: 'America/New_York',
      },
    },
  ],
});