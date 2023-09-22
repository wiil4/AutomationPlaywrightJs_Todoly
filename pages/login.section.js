class LoginSection{
    constructor(page){
        this.page = page;
        this.usernameField = page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail');
        this.passwordField = page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword');
        this.loginButton = page.locator('#ctl00_MainContent_LoginControl1_ButtonLogin');        
    }

    async fillUsername(username){
        await this.usernameField.fill(username);
    }

    async fillPassword(password){
        await this.passwordField.fill(password);
    }

    async clickLogin(){
        await this.loginButton.click();
    }
}

module.exports = {LoginSection}