const { expect } = require('@playwright/test')

class SortingPage {

  constructor(page) {
    this.page = page

  }

async sortLTH() {

     // Select "Price Low to High"
  await this.page.selectOption('.product_sort_container', 'lohi');

  // Get all product prices
  const prices = await this.page.locator('.inventory_item_price').allTextContents();

  // Convert to numbers
  const actualPrices = prices.map(p => parseFloat(p.replace('$', '')));

  // Create sorted copy
  const sortedPrices = [...actualPrices].sort((a, b) => a - b);

  console.log("Actual:", actualPrices);
  console.log("Sorted:", sortedPrices);

  // Compare both arrays
  expect(actualPrices).toEqual(sortedPrices);

}

}

module.exports = SortingPage
