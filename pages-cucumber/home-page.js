
class HomePage{

    async gotoHomePage(){
        await page.goto('https://todo.ly');
    }
    async clickLoginButton(){
        await page.locator('//img[contains(@src,"login")]').click();
    }

    async clickSignUpButton(){
        await page.locator('//img[contains(@src,"signup")]').click();
    }

    async checkLoginButton(){
        return page.locator("//img[contains(@src,'pagelogin')]");
    }
}

module.exports = {HomePage}