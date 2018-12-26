'use strict';
var gitlogin = require('../scripts/gitloginscript.js');


describe("Gitlogin Page testing", function () {
    beforeAll(function (done) {
        browser.ignoreSynchronization = true;
        gitlogin.login("","")
        done();
    });

    it('Testing the sign in button', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
        console.log(`${global.testStepName}`);
        gitlogin.gitSigninButton();
        
    });

    it('Testing the login without username and password', function () {
        console.log(`${global.testStepName}`);
       gitlogin.gitlogin_withoutusername_password();
    });
    it('Testing login with username and  without password', function () {
        console.log(`${global.testStepName}`);
        gitlogin.gitlogin_withusername_withoutpassword();
    });

    it('Testing login without username and  with password', function () {
        console.log(`${global.testStepName}`);
        gitlogin.gitlogin_withoutusername_withpassword();
        
    });

    it('Testing the forgot password', function () {
        console.log(`${global.testStepName}`);
       gitlogin.git_forgot_password() 
    });

    it('Testing the creation of new account', function () {
        console.log(`${global.testStepName}`);
        gitlogin.git_creation_newaccount()
    });
    

    it('Testing the Git login by Passing Username and Password', function () {
        console.log(`${global.testStepName}`);
       gitlogin.git_login()
    });

});
