'use strict';



module.exports = {
    elements: {
        signin: element(by.css('[href="/login"]')),
        userName: element(by.id('login_field')),
        password: element(by.id('password')),
        signinButton: element(by.css('.btn.btn-primary.btn-block')),
        forgotPassword: element(by.css('[href="/password_reset"]')),
        forgotPasswordTextbox: element(by.id('email_field')),
        passwordResetEmailButton: element(by.css('.btn.btn-primary.btn-block')),
        returnSigninButton: element(by.css('[href="/login"]')),
        createAccountLink: element(by.css(".create-account-callout.mt-3")),
        signinButtonCreateAccount: element(by.css('.HeaderMenu-link.no-underline.mr-3')),
        errorMessage: element(by.id('js-flash-container')),
        userProfile:element(by.css(".HeaderNavlink.name.mt-1"))
    },

    clickSignIn() {
        this.elements.signin.click();
    },
    enterUserName(text) {
        this.elements.userName.sendKeys(text);
    },
    clearUserNameandPassword() {
        this.elements.userName.clear();
        this.elements.password.clear();
    },
    enterPassword(text) {
        this.elements.password.sendKeys(text);
    },
    clickSignInButtton() {
        this.elements.signinButton.click();
    },
    clickForgotPassword() {
        this.elements.forgotPassword.click();
    },
    enterForgetPassordTextbox(text) {
        this.elements.forgotPasswordTextbox.sendKeys(text);
    },
    clickPasswordResetButton() {
        this.elements.passwordResetEmailButton.click();
    },
    clickReturnSigninButton() {
        this.elements.returnSigninButton.click();
    },
    clickCreateAccountButton() {
        this.elements.createAccountLink.click();
    },
    clickSignibButtonOfCreateAccount() {
        this.elements.signinButtonCreateAccount.click();
    },
    getErrorMessageText() {
        return this.elements.errorMessage.getText();
    },
    clickOnUserProfile(){
        this.elements.userProfile.click();
    }
}
