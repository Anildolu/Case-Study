//'use strict';
var gitLoginScript = require('../scripts/gitLoginScript.js');
var gitLoginPage = require('../pageObject/gitLoginPage.js');


describe("Gitlogin Page testing", function () {
    beforeAll(function (done) {
        browser.ignoreSynchronization = true;
        gitLoginScript.gitLoginUrl();
        done();
    });

    it('TC-01 Testing the signin button', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
        console.log(`${global.testStepName}`);
        gitLoginScript.gitSigninButton();  
    });

    it('TC-02 Testing the login without username and password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.gitloginWithoutUsernamePassword();
    });
    it('Testing login with username and  without password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.gitloginWithUsernameWithoutPassword("","");
    });

    it('Testing login without username and  with password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.gitloginWithoutUsernameWithPassword("","");
        
    });

    it('Testing the forgot password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.gitForgotPassword();
    });

    it('Testing the creation of new account', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.gitCreatingNewaccount()
    });
    

    it('Testing the Git login by Passing Username and Password', function () {
        console.log(`${global.testStepName}`);
        gitLoginScript.login("","")
    });

});
