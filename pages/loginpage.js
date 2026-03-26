class loginPage {

  constructor(page) {
    
    this.page = page
  }

  async goto() {

    await this.page.goto('https://www.saucedemo.com/')
  }

  async login(username, password) {

    await this.page.fill('#user-name', username)
    await this.page.fill('#password', password)
    await this.page.click('#login-button')
  }

}

module.exports = loginPage



