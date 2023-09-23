class SignUpSection{
    constructor(page){
        this.page = page;        
        this.fullNameField = page.locator('#ctl00_MainContent_SignupControl1_TextBoxFullName');
        this.emailField = page.locator('#ctl00_MainContent_SignupControl1_TextBoxEmail');
        this.passwordField = page.locator('#ctl00_MainContent_SignupControl1_TextBoxPassword');
        this.dropwdown = page.locator('#ctl00_MainContent_SignupControl1_DropDownTimezone');
        this.termsCheckbox = page.locator('#ctl00_MainContent_SignupControl1_CheckBoxTerms');
        this.signUpButton = page.locator('#ctl00_MainContent_SignupControl1_ButtonSignup');
    }    

    async fillRegisterForm(fullName, email, password){
        await this.fullNameField.fill(fullName);
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
    }

    async termsAndConditions(){
        await this.termsCheckbox.check();
    }

    async clickSignUpButton(){
        await this.signUpButton.click();
    }
}

module.exports = {SignUpSection}