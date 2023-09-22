const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');
const exp = require('constants');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('Login',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);
    
    await homePage.clickLoginButton();
    await loginSection.fillUsername('willcorreos@gmail.com');
    await loginSection.fillPassword('todoly');
    await loginSection.clickLogin();
    await expect(mainPage.logOutButton).toBeVisible();
});