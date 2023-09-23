class MainPage{
    constructor(page){
        this.page = page;
        this.logOutButton = page.locator('#ctl00_HeaderTopControl1_LinkButtonLogout');

        //CREATE TASK
        this.inboxSectionButton = page.locator('//td[text()="Inbox"]');
        this.newTaskField = page.locator('#NewItemContentInput');
        this.addTaskButton = page.locator('#NewItemAddButton');
        
        //UPDATE TASK
        this.optionsButton = page.locator("//img[contains(@style,'inline')]");
        this.editNameButton = page.locator("//ul[contains(@style,'block')]//a[text()='Edit']");
        this.newTaskNameField = page.locator('//li//textarea[@id="ItemEditTextbox"]');

        //DELETE TASK
        this.deleteTaskButton = page.locator("//ul[contains(@style,'block')]//a[text()='Delete']");
        this.infoDeletedBar = page.locator('#HeaderMessageInfo');
    }

    //CREATE TASK
    async clickInbox(){
        await this.inboxSectionButton.click();
    }
    
    async fillNewTask(taskName){
        await this.newTaskField.fill(taskName);
    }

    async addNewTask(){
        await this.addTaskButton.click();
    }

    //UPDATE TASK
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

    checkTaskName(taskName){
        return this.page.locator(`(//li//div[text()="${taskName}"])[last()]`);
    }

    //DELETE TASK
    async clickDeleteButton(){
        await this.deleteTaskButton.click();
    }

    //LOG OUT
    async clickLogOut(){
        await this.logOutButton.click();
    }

    async createNewTaskWithName(taskName){
        await this.newTaskField.fill(taskName);
        await this.addTaskButton.click();
    }

}

module.exports = {MainPage}