const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage.js');
const ProductPage = require('../pages/productpage.js');
const { productPageLocators } = require('../locators/productpagelocators.js');

test.describe('Inventory Tests', () => {
  let page;
  let loginPage;
  let productpage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    productpage = new ProductPage(page);

    // Login first before each test
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce'); // Call your login method
  });

  test('should logout properly', async () => {

    await productpage.logout();
    expect(await page.locator(productPageLocators.loginbutton).isVisible()).toBeTruthy();


  });

    test('about link and go back', async () => {

    await productpage.about();
    expect(await page.locator(productPageLocators.tryitfreebutton).isVisible()).toBeTruthy();
    await page.goBack();
    expect(await page.locator(productPageLocators.shoppingCartIcon).isVisible()).toBeTruthy();


  });

  test('add first product to cart', async () => {

    await productpage.addFirstToCart();
    await page.click(productPageLocators.shoppingCartIcon);
    expect(await page.locator('.cart_item').isVisible()).toBeTruthy();  

  });

    test.only('add all product to cart', async () => {

    await productpage.addallproductsToCart();
    await page.click(productPageLocators.shoppingCartIcon);
    const cartItems = await page.locator('.cart_item').count();
    expect(cartItems).toBe(6); // Assuming there are 6 products in total    
  

  });

});