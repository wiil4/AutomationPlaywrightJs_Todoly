const{test, expect} = require('@playwright/test');
const{HomePage} = require('../pages/home.page');
const{LoginSection} = require('../pages/login.section');
const { MainPage } = require('../pages/main.page');
const config = require('../Utility/config');

test.beforeEach(async({page})=>{
    await page.goto('https://todo.ly');
});

test('Delete a Task',async({page})=>{
    const homePage = new HomePage(page);
    const loginSection = new LoginSection(page);
    const mainPage = new MainPage(page);

    const tasktoDelete = config.DeleteTask.taskName;
    
    await homePage.clickLoginButton();
    await loginSection.loginWithCredentials(config.Login.email, config.Login.password);

    await mainPage.clickInbox();
    await mainPage.createNewTaskWithName(tasktoDelete);
    await mainPage.hoverOverTask(tasktoDelete);
    await mainPage.openTaskOptions();
    await mainPage.clickDeleteButton();
    //await expect(mainPage.checkTaskName(tasktoDelete)).not.toBeVisible();
    await expect(mainPage.infoDeletedBar).toBeVisible();
});