class MainPage{
    constructor(page){
        this.page = page;
        this.logOutButton = page.locator('#ctl00_HeaderTopControl1_LinkButtonLogout');
    }
}

module.exports = {MainPage}