//'use strict';
var gitLoginPage = require('../pageObject/gitLoginPage.js')

module.exports = {
    invalidlogin(userName, password) {
        gitLoginPage.enterUserName(userName);
        gitLoginPage.enterPassword(password);
        gitLoginPage.clickSignInButtton();
        this.verifyingExpectedData();
    },

    login(userName, password) {
        gitLoginPage.enterUserName(userName);
        gitLoginPage.enterPassword(password);
        gitLoginPage.clickSignInButtton();
        gitLoginPage.clickOnUserProfile();
        //expect(browser.getCurrentUrl()).toBe('https://github.com/');
    },

    verifyingExpectedData() {
        expect(gitLoginPage.getErrorMessageText()).toBe('Incorrect username or password.');
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitLoginPage.clearUserNameandPassword();
    },

    navigateToLoginUrl: function () {
        browser.get('https://github.com');
        expect(browser.getCurrentUrl()).toBe('https://github.com/');
    },

    clickGitSigninButton: function () {
        gitLoginPage.clickSignIn();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
    },
    verifyForgotPassword: function () {
        //gitLoginPage.enterUserName(userName);
        gitLoginPage.clickForgotPassword();
        expect(browser.getCurrentUrl()).toBe('https://github.com/password_reset');
        gitLoginPage.enterForgetPassordTextbox('anil@gmail.com');
        gitLoginPage.clickPasswordResetButton();
        gitLoginPage.clickReturnSigninButton();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
    },
    verifyCreatingNewaccount: function () {
        gitLoginPage.clickCreateAccountButton();
        expect(browser.getCurrentUrl()).toBe('https://github.com/join?source=login');
        gitLoginPage.clickSignibButtonOfCreateAccount();
    },
}
