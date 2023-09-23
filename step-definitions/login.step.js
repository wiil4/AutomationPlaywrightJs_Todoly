const{Given, When, Then, defineStep, Before} = require('@cucumber/cucumber')
const{HomePage} = require('../pages/home.page')
const{LoginSection} = require('../pages/login.section')
const {MainPage} = require('../pages/main.page')

const homePage = new HomePage();
const loginSection = new LoginSection();
const mainPage = new MainPage();

Given('I navigate to home page', async()=>{
    await homePage.gotoHomePage();
});

defineStep('I click on login button', async()=>{
    await homePage.clickLoginButton();
});

defineStep(/^I fill the login form with "([^"]*)" and "([^"]*)"$/, async(username,password)=>{
    await loginSection.loginWithCredentials(username, password);
});

Then('Then I should see Todoly main page', async()=>{
    await expect(mainPage.logOutButton).toBeVisible();
});