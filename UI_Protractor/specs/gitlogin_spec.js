'use strict';
var gitloginPage = require('../pageObject/gitlogin.js');


describe("Gitlogin Page testing", function () {
    beforeAll(function (done) {
        browser.ignoreSynchronization = true;
        browser.get('https://github.com');
        done();
    });

    it('Testing the Git login', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
        gitloginPage.elements.signin.click();
        expect(browser.getCurrentUrl()).toBe('https://github.com/login');
        browser.sleep(3000);
    });

    it('Testing the Git login', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
       gitloginPage.elements.signin.click();
       browser.sleep(3000);
    });

});
