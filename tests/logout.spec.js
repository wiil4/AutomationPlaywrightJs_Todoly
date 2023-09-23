const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');
const config = require('../Utility/config');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('LogOut operation',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);
    
    await homePage.clickLoginButton();
    await loginSection.loginWithCredentials(config.Login.email, config.Login.password);
    await expect(mainPage.logOutButton).toBeVisible();
    await mainPage.clickLogOut();
    await expect(homePage.loginButton).toBeVisible();
});