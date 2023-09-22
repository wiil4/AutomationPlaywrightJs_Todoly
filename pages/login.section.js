class LoginSection{
    constructor(page){
        this.page = page;
        this.usernameField = page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail');
        this.passwordField = page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword');
        this.loginButton = page.locator('#ctl00_MainContent_LoginControl1_ButtonLogin');        
    }

    async loginWithCredentials(username, password){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }
}

module.exports = {LoginSection}