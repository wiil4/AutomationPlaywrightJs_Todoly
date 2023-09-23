class HomePage{
    constructor(page){
        this.page = page;
        this.loginButton = page.locator('//img[contains(@src,"login")]');
        this.signUpButton = page.locator('//img[contains(@src,"signup")]');
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }

    async clickSignUpButton(){
        await this.signUpButton.click();
    }

    async checkLoginButton(){
        return this.page.locator("//img[contains(@src,'pagelogin')]");
    }
}

module.exports = {HomePage}