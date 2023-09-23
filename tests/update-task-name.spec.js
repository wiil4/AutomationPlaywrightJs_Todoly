const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');
const config = require('../Utility/config');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('Update a Task Name',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);

    const taskName = config.UpdateTask.taskName;
    const newTaskName = config.UpdateTask.updateName;
    
    await homePage.clickLoginButton();
    await loginSection.loginWithCredentials(config.Login.email,config.Login.password);

    await mainPage.clickInbox();
    await mainPage.createNewTaskWithName(taskName);
    await mainPage.hoverOverTask(taskName);
    await mainPage.openTaskOptions();
    await mainPage.clickEditNameOption();
    await mainPage.updateTaskNameTo(newTaskName);
    await expect(mainPage.checkTaskName(newTaskName)).toHaveText(newTaskName);
});