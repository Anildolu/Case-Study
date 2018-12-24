'use strict';
var gitloginPage = require('../pageObject/gitlogin.js');


describe("Gitlogin Page testing", function () {
    beforeAll(function (done) {
        console.log(`-------------- ${global.testCaseName} --------------`);
        browser.ignoreSynchronization = true;
        browser.get('https://github.com');
        done();
    });

    it('Testing the sign in button', function () {
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
        gitloginPage.elements.username.sendkeys("doluanil@gmail.com")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
    });

    it('Testing login without username and  with password', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.password.sendkeys("Anil@1218")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/session');
    });

    it('Testing the forgot password', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.username.sendkeys("doluanil@gmail.com")
        gitloginPage.elements.forgetpassword.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/password_reset');
        gitloginPage.elements.forgetpasswordtextbox.sendkeys('anil@gmail.com');
        gitloginPage.elements.password_reset_emailsend_button.click();
        gitloginPage.elements.return_signin_button.click();
    });

    it('Testing the creation of new account', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.Create_account_link.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/join?source=login');
        gitloginPage.elements.signinbutton.click();
        
    });
    

    it('Testing the Git login', function () {
        console.log(`${global.testStepName}`);
        gitloginPage.elements.username.sendkeys("doluanil@gmail.com")
        gitloginPage.elements.password.sendkeys("Anil@1218")
        gitloginPage.elements.signinbutton.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com');
    });

});
