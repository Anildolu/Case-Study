'use strict';
var gitloginPage = require('../pageObject/gitlogin.js')


module.exports = {


    login(userName, password) {
        gitloginPage.enterUserName(userName);
        gitloginPage.enterPassword(password);
        gitloginPage.clickSignIn();
    },



    gitLoginUrl: function () {
        browser.get('https://github.com');
    },

    gitSigninButton: function () {
        gitloginPage.elements.signin.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
    },

    gitlogin_withoutusername_password: function () {
        gitloginPage.elements.signinbutton.click();
        expect(gitloginPage.getErrorMessageText()).toBe("Incorrect username or password.")
       // expect(browser.getCurrentUrl()).toBe('https://github.com/session');
    },

    gitlogin_withusername_withoutpassword: function () {
        gitloginPage.elements.username.sendKeys("doluanil@gmail.com")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitloginPage.elements.username.clear();
    },

    gitlogin_withoutusername_withpassword: function () {
        gitloginPage.elements.password.sendKeys("Anil@1218")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitloginPage.elements.password.clear();
    },

    git_forgot_password: function () {
        gitloginPage.elements.username.sendKeys("doluanil@gmail.com")
        gitloginPage.elements.forgetpassword.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/password_reset');
        gitloginPage.elements.forgetpasswordtextbox.sendKeys('anil@gmail.com');
        gitloginPage.elements.password_reset_emailsend_button.click();
        gitloginPage.elements.return_signin_button.click();
    },

    git_creation_newaccount: function () {
        gitloginPage.elements.Create_account_link.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/join?source=login');
        gitloginPage.elements.signin_button_create_account.click();
    },

    git_login: function () {
        gitloginPage.elements.username.sendKeys("doluanil@gmail.com")
        gitloginPage.elements.password.sendKeys("Anil@1218")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/');
    }
}
