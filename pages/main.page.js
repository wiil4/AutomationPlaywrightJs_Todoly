class MainPage{
    constructor(page){
        this.page = page;
        this.logOutButton = page.locator('#ctl00_HeaderTopControl1_LinkButtonLogout');

        this.inboxSectionButton = page.locator('//td[text()="Inbox"]');
        this.newTaskField = page.locator('#NewItemContentInput');
        this.addTaskButton = page.locator('#NewItemAddButton');

        this.lastTaskCreated = page.locator('//ul[@id="mainItemList"]//li[last()]');
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

}

module.exports = {MainPage}