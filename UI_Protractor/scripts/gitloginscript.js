//'use strict';
var gitLoginPage = require('../pageObject/gitLoginPage.js')


module.exports = {
    login(userName, password) {
        gitLoginPage.enterUserName(userName);
        gitLoginPage.enterPassword(password);
        gitLoginPage.clickSignInButtton();
        expect(browser.getCurrentUrl()).toBe('https://github.com/');
    },

    gitloginWithoutUsernamePassword(){
        gitLoginPage.clickSignInButtton();
        expect(gitLoginPage.getErrorMessageText()).toBe('Incorrect username or password.');
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitLoginPage.clearUserName();
    },

    gitloginWithUsernameWithoutPassword(userName,password){
        gitLoginPage.enterUserName(userName);
        gitLoginPage.enterPassword(password);
        gitLoginPage.clickSignInButtton();
        expect(gitLoginPage.getErrorMessageText()).toBe('Incorrect username or password.');
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitLoginPage.clearUserName();
    },
    gitloginWithoutUsernameWithPassword(userName,password){
        gitLoginPage.enterUserName(userName);
        gitLoginPage.enterPassword(password);
        gitLoginPage.clickSignInButtton();
        expect(gitLoginPage.getErrorMessageText()).toBe('Incorrect username or password.');
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitLoginPage.clearPassword();
    },
    gitLoginUrl: function () {
        browser.get('https://github.com');
        expect(browser.getCurrentUrl()).toBe('https://github.com');
    },

    gitSigninButton: function () {
        gitLoginPage.clickSignIn();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
    },
    gitForgotPassword: function () {
        gitLoginPage.enterUserName(userName);
        gitLoginPage.clickForgotPassword();
        expect(browser.getCurrentUrl()).toBe('https://github.com/password_reset');
        gitLoginPage.enterForgetPassordTextbox('anil@gmail.com');
        gitLoginPage.clickPasswordResetButton();
        gitLoginPage.clickReturnSigninButton();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
    },
    gitCreatingNewaccount: function () {
        gitLoginPageclickCreateAccountButton();
        expect(browser.getCurrentUrl()).toBe('https://github.com/join?source=login');
        gitLoginPage.clickSignibButtonOfCreateAccount();
    },
}
