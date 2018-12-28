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
        errorMessage: element(by.id('js-flash-container'))
    },

    clickSignIn() {
        this.elements.signin.click();
    },
    enterUserName(text) {
        this.elements.username.sendKeys(text);
    },
    clearUserName(){
        this.elements.username.clear();
    },
    enterPassword(text){
        this.elements.password.sendKeys(text); 
    },
    clearPassword(){
        this.elements.password.clear();
    },
    clickSignInButtton() {
        this.elements.signinButton.click();
    },
    clickForgotPassword() {
        this.elements.forgotPassword.click();
    },
    enterForgetPassordTextbox(text){
        this.elements.forgotPasswordTextbox.sendKeys(text);
    },
    clickPasswordResetButton() {
        this.elements.passwordResetEmailButton.click();
    },
    clickReturnSigninButton(){
        this.elements.returnSigninButton.click();
    },
    clickCreateAccountButton(){
        this.createAccountLink.click();
    },
    clickSignibButtonOfCreateAccount(){
        this.signinButtonCreateAccount.click();
    },
    getErrorMessageText() {
        return this.elements.error_message.getText();
    }
}
