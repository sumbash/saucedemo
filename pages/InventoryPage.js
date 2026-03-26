const { expect } = require('@playwright/test')

class InventoryPage {

  constructor(page) {
    this.page = page

  }

  async addinventory() {

    // Verify inventory page loaded
    await expect(this.page).toHaveURL(/inventory/);
    // Add first product to cart
    await this.page.click('#add-to-cart-sauce-labs-backpack');

    // Verify cart badge shows 1 item
    const cartBadge = this.page.locator('.shopping_cart_badge');
    await expect(cartBadge).toHaveText('1');

    // Open cart
    await this.page.click('.shopping_cart_link');

    // Verify product is in cart
    await expect(this.page.locator('.inventory_item_name')).toContainText('Sauce Labs Backpack');
  }

  async removeinventory() {

    // Verify inventory page loaded
    await expect(this.page).toHaveURL(/cart/);
    // Remove the product from cart
    await this.page.getByRole('button', { name: 'Remove' }).click();

    await this.page.waitForTimeout(3000);

    // Verify product removed
    await expect(this.page.locator('.inventory_item_name')).toHaveCount(0);

    // Verify cart badge disappears
    await expect(this.page.locator('.shopping_cart_badge')).toHaveCount(0);
  }

  async getProductPrice(productName) {

    // Locate product container using product name
    const product = this.page.locator('.inventory_item')
      .filter({ hasText: productName });

    // Get price inside that product
    const priceText = await product
      .locator('.inventory_item_price')
      .textContent();

    return priceText;
  }


}

module.exports = InventoryPage
