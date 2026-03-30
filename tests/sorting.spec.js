const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage.js');
const SortingPage = require('../pages/sortingpage.js');

test.describe('sorting  Tests', () => {
  let page;
  let loginPage;
  let sortingPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    sortingPage = new SortingPage(page);

    // Login first before each sorting test
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce'); // Call your login method
  });

  test('should sort from low to high', async () => {
    // Now call sorting test after login
    await sortingPage.sortLTH();
    await page.waitForTimeout(3000) // Add a timeout to observe the sorting result before the page closes
  });

    test('should sort from high to low', async () => {
    // Now call sorting test after login
    await sortingPage.sortHTL();

    await page.waitForTimeout(3000) // Add a timeout to observe the sorting result before the page closes

  });


    

  test.afterEach(async () => {
    await page.close();
  });
});