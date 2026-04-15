const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage.js');
const CheckoutPage = require('../pages/checkoutpage.js');
const { checkoutdata } = require('../testdata/checkoutdata.js');
const ProductPage = require('../pages/productpage.js');
const { productPageLocators } = require('../locators/productpagelocators.js');

test.describe('checkout Tests', () => {
  let page;
  let loginPage;
  let checkoutPage;
  let productPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    checkoutPage = new CheckoutPage(page);
    productPage = new ProductPage(page);

    // Login first before each test
    await loginPage.goto()
    await loginPage.login('standard_user', 'secret_sauce'); // Call your login method
    await productPage.addFirstToCart(); // Add a product to cart before checkout
    await page.click('#shopping_cart_container');
  });

  test('validate checkout page elements', async () => {
    // Check if the checkout page elements are visible
    expect(await checkoutPage.getcheckoutelements().pageinfo.isVisible()).toBeTruthy();
    expect(await checkoutPage.getcheckoutelements().cancelbutton.isVisible()).toBeTruthy();
    expect(await checkoutPage.getcheckoutelements().continebutton.isVisible()).toBeTruthy();
  });

});

