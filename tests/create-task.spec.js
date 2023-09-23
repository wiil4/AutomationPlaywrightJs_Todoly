const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('Create a new Task',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);

    const taskName = 'CreatedTask';
    
    await homePage.clickLoginButton();
    await loginSection.loginWithCredentials('willcorreos@gmail.com', 'todoly');

    await mainPage.clickInbox();
    await mainPage.fillNewTask(taskName);
    await mainPage.addNewTask();
    await expect(mainPage.checkTaskName(taskName)).toHaveText(taskName);
});