class MainPage{
    constructor(page){
        this.page = page;
        this.logOutButton = page.locator('#ctl00_HeaderTopControl1_LinkButtonLogout');

        //CREATE TASK
        this.inboxSectionButton = page.locator('//td[text()="Inbox"]');
        this.newTaskField = page.locator('#NewItemContentInput');
        this.addTaskButton = page.locator('#NewItemAddButton');

        this.lastTaskCreated = page.locator('//ul[@id="mainItemList"]//li[last()]');
        
        //UPDATE TASK
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
        await this.page.locator(`(//td//div[text()="${taskName}"])[last()]`).hover();
    }

    async openTaskOptions(){
        await this.optionsButton.click();
    }

    async clickEditNameOption(){
        await this.editNameButton.click();
    }

    async updateTaskNameTo(newTaskName){
        await this.newTaskNameField.fill(newTaskName);
        await this.newTaskNameField.press('Enter');
    }

    checkNewTaskName(taskName){
        return this.page.locator(`(//li//div[text()="${taskName}"])[last()]`);
    }

}

module.exports = {MainPage}