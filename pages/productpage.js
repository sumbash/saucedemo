const { expect } = require('@playwright/test')
const { productPageLocators } = require('../locators/productpagelocators.js')

class ProductPage {

  constructor(page) {
    this.page = page

  }

async logout(){
    await this.page.click(productPageLocators.settingsButton);
    await this.page.click(productPageLocators.logoutlink);


}

async about() {
    await this.page.click(productPageLocators.settingsButton);
    await this.page.click(productPageLocators.aboutlink);


}

async addFirstToCart() {
    await this.page.locator(productPageLocators.addToCartButton).first().click();

}

async addallproductsToCart() {
    const addToCartButtons = await this.page.locator(productPageLocators.addToCartButton);

    const count = await addToCartButtons.count();
    for (let i = 0; i < count; i++) {
        await addToCartButtons.nth(i).click();
    }
}

}

module.exports = ProductPage