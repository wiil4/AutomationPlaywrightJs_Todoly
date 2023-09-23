const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');
const config = require('../Utility/config');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('Create a new Task',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);

    const taskName = config.CreateTask.taskName;
    
    await homePage.clickLoginButton();
    await loginSection.loginWithCredentials(config.Login.email, config.Login.password);

    await mainPage.clickInbox();
    await mainPage.fillNewTask(taskName);
    await mainPage.addNewTask();
    await expect(mainPage.checkTaskName(taskName)).toHaveText(taskName);
});