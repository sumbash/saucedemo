const { expect } = require('@playwright/test')
const { checkoutPageLocators } = require('../locators/checkoutpagelocators.js')

class checkoutPage {

  constructor(page) {
    this.page = page

  }


  async getcheckoutelements() {

    return{
        pageinfo: await this.page.locator(checkoutPageLocators.pageinfo),
        cancelbutton: await this.page.locator(checkoutPageLocators.cancelbutton),
        continebutton: await this.page.locator(checkoutPageLocators.continebutton)


   }


}

async entercheckoutdetails(firstname,lastname,postalcode) {

    await this.page.fill(checkoutPageLocators.firstname, firstname);
    await this.page.fill(checkoutPageLocators.lastname, lastname);
    await this.page.fill(checkoutPageLocators.postalcode, postalcode);

}

async clickcontinue() {
    await this.page.click(checkoutPageLocators.continebutton);  


}

async clickcancel() {
    
    await this.page.click(checkoutPageLocators.cancelbutton);   

}

}

module.exports = checkoutPage