'use strict';
var gitLoginScript = require('../scripts/gitLoginScript.js');
var gitLoginPage = require('../pageObject/gitLoginPage.js');


describe("Gitlogin Page testing", function () {
    beforeAll(function (done) {
        browser.ignoreSynchronization = true;
        gitLoginScript.navigateToLoginUrl();
        done();
    });

    it('TC-01 Testing the signin button', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
        console.log(`${global.testStepName}`);
        gitLoginScript.clickGitSigninButton();
    });

    it('TC-02 Testing the forgot password functionality', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.verifyForgotPassword();
    });

    it('TC-03 Testing the creation of new account functionality', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.verifyCreatingNewaccount()
    });

    it('TC-04 Testing the login without username and password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.invalidlogin("","");
    });

    it('TC-05 Testing login with username and  without password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.invalidlogin("user@gmail.com", "");
    });

    it('TC-06 Testing login without username and  with password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.invalidlogin("", "1218");
    });
    it('TC-07 Testing login with Invalid username and password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.invalidlogin("test", "123");
    });

    it('TC-08 Testing the Git login by Passing Valid Username and Password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.login(browser.params.creds.userName, browser.params.creds.password)
    });

});
