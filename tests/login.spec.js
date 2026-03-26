import { test, expect } from '@playwright/test';

const LoginPageClass = require('../pages/loginpage.js');

test('login', async ({ page }) => {

 const loginPageObject = new LoginPageClass(page)

 await loginPageObject.goto()

 await loginPageObject.login('standard_user', 'secret_sauce')

 await expect(page).toHaveURL(/inventory/);

});