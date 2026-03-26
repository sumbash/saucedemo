const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage.js');
const InventoryPage = require('../pages/InventoryPage.js');

test.describe('Inventory Tests', () => {
  let page;
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);

    // Login first before each inventory test
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce'); // Call your login method
  });

  test('should add product to cart', async () => {
    // Now call inventory test after login
    await inventoryPage.addinventory();
  });

  test('should remove product from cart', async () => {
    await inventoryPage.addinventory();
    await inventoryPage.removeinventory();
  });

  test('should display correct price for product', async () => {

    const price = await inventoryPage.getProductPrice('Sauce Labs Backpack');

    console.log(price); // $29.99

    expect(price).toBe('$29.99');

  })

  test.afterEach(async () => {
    await page.close();
  });
});
