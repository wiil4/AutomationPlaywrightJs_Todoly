const{Given, When, Then, defineStep} = require('@cucumber/cucumber')
const{HomePage} = require('../pages-cucumber/home-page')
const{LoginSection} = require('../pages-cucumber/login-section')
const {MainPage} = require('../pages-cucumber/main-page')


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

defineStep('I should see Todoly main page', async()=>{
    await mainPage.checkLogOut();
});