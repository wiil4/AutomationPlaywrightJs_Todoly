class MainPage{
    constructor(page){
        this.page = page;
        this.logOutButton = page.locator('#ctl00_HeaderTopControl1_LinkButtonLogout');

        this.inboxSectionButton = page.locator('//td[text()="Inbox"]');
        this.newTaskField = page.locator('#NewItemContentInput');
        this.addTaskButton = page.locator('#NewItemAddButton');

        this.lastTaskCreated = page.locator('//ul[@id="mainItemList"]//li[last()]');

        this.optionsButton = page.locator("//img[contains(@style,'inline')]");
        this.editNameButton = page.locator("//ul[contains(@style,'block')]//a[text()='Edit']");
        this.newTaskNameField = page.locator('//li//textarea[@id="ItemEditTextbox"]');
    }

    async clickInbox(){
        await this.inboxSectionButton.click();
    }
    
    async fillNewTask(taskName){
        await this.newTaskField.fill(taskName);
    }

    async addNewTask(){
        await this.addTaskButton.click();
    }

    async hoverOverTask(taskName){
        await page.locator(`(//td//div[text()="${taskName}"])[last()]`).hover();
    }

    async openTaskMenu(){
        await this.optionsButton.click();
    }

    async editNameOptionsButton(){
        await this.editNameButton.click();
    }

    async updateTaskTo(newTaskName){
        await this.newTaskNameField.fill(newTaskName);
        await this.page.press('Enter');
    }

}

module.exports = {MainPage}