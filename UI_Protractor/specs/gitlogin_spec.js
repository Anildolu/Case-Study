'use strict';
var gitloginPage = require('../pageObject/gitlogin.js');


describe("Gitlogin Page testing", function () {
    beforeAll(function (done) {
        browser.ignoreSynchronization = true;
        browser.get('https://github.com');
        done();
    });

    it('Testing the sign in button', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
        console.log(`${global.testStepName}`);
        gitloginPage.elements.signin.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
    });

    it('Testing the login without username and password', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
    });
    it('Testing login with username and  without password', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.username.sendKeys("doluanil@gmail.com")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitloginPage.elements.username.clear();
    });

    it('Testing login without username and  with password', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.password.sendKeys("Anil@1218")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
        gitloginPage.elements.password.clear();
    });

    it('Testing the forgot password', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.username.sendKeys("doluanil@gmail.com")
        gitloginPage.elements.forgetpassword.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/password_reset');
        gitloginPage.elements.forgetpasswordtextbox.sendKeys('anil@gmail.com');
        gitloginPage.elements.password_reset_emailsend_button.click();
        gitloginPage.elements.return_signin_button.click();
    });

    it('Testing the creation of new account', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.Create_account_link.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/join?source=login');
        gitloginPage.elements.signin_button_create_account.click();   
    });
    

    it('Testing the Git login', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.username.sendKeys("doluanil@gmail.com")
        gitloginPage.elements.password.sendKeys("Anil@1218")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/');
    });

});
