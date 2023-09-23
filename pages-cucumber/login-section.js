
class LoginSection{

    async loginWithCredentials(username, password){
        await page.locator('#ctl00_MainContent_LoginControl1_TextBoxEmail').fill(username);
        await page.locator('#ctl00_MainContent_LoginControl1_TextBoxPassword').fill(password);
        await page.locator('#ctl00_MainContent_LoginControl1_ButtonLogin').click();
    }
}

module.exports = {LoginSection}