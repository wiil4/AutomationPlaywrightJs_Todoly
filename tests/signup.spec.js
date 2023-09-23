const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{SignUpSection} = require('../pages/signup.section');
const { MainPage } = require('../pages/main.page');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('SignUp',async({page})=>{
    const homePage = new HomePage(page);
    const signUpSection = new SignUpSection(page);
    const mainPage = new MainPage(page);
    
    const name = 'testing';
    const email = 'losoya2838@alvisani.com';
    const password = '123456';

    await homePage.clickSignUpButton();
    await signUpSection.fillRegisterForm(name, email, password);
    await signUpSection.termsAndConditions();
    await signUpSection.clickSignUpButton();
    await expect(mainPage.logOutButton).toBeVisible();
});