
class MainPage{

    //CREATE TASK
    async clickInbox(){
        await page.locator('//td[text()="Inbox"]').click();
    }
    
    async fillNewTask(taskName){
        await page.locator('#NewItemContentInput').fill(taskName);
    }

    async addNewTask(){
        await page.locator('#NewItemAddButton').click();
    }

    //UPDATE TASK
    async hoverOverTask(taskName){
        await page.locator(`(//td//div[text()="${taskName}"])[last()]`).hover();
    }

    async openTaskOptions(){
        await page.locator("//img[contains(@style,'inline')]").click();
    }

    async clickEditNameOption(){
        await page.locator("//ul[contains(@style,'block')]//a[text()='Edit']").click();
    }

    async updateTaskNameTo(newTaskName){
        await page.locator('//li//textarea[@id="ItemEditTextbox"]').fill(newTaskName);
        await page.locator('//li//textarea[@id="ItemEditTextbox"]').press('Enter');
    }

    checkTaskName(taskName){
        return page.locator(`(//li//div[text()="${taskName}"])[last()]`);
    }

    //DELETE TASK
    async clickDeleteButton(){
        await page.locator("//ul[contains(@style,'block')]//a[text()='Delete']").click();
    }

    //LOG OUT
    async clickLogOut(){
        await page.locator('#ctl00_HeaderTopControl1_LinkButtonLogout');
    }

    async createNewTaskWithName(taskName){
        await page.locator('#NewItemContentInput').fill(taskName);
        await page.locator('#NewItemAddButton').click();
    }

    async infoDeletedBar(){
        return page.locator('#HeaderMessageInfo')
    }

    async checkLogOut(){
        await page.waitForSelector('#ctl00_HeaderTopControl1_LinkButtonLogout');
    }
}

module.exports = {MainPage}