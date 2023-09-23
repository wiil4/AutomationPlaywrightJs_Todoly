const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('Update a Task Name',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);

    const taskName = 'Task345';
    const newTaskName = 'Task123456';
    
    await homePage.clickLoginButton();
    await loginSection.loginWithCredentials('willcorreos@gmail.com', 'todoly');

    await mainPage.clickInbox();
    await mainPage.hoverOverTask(taskName);
    await mainPage.openTaskOptions();
    await mainPage.clickEditNameOption();
    await mainPage.updateTaskNameTo(newTaskName);
    await expect(mainPage.checkTaskName(newTaskName)).toHaveText(newTaskName);
});