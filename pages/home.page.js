class HomePage{
    constructor(page){
        this.page = page;
        this.loginButton = page.locator('//img[contains(@src,"login")]');        
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}

module.exports = {HomePage}