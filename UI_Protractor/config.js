/*
Created By: Anil Dolu
Created Date: Dec 28th 2018
*/

'use strict';
/**********************************Test case name***************************************/
var myReporter = {
    specStarted: function (result) {
        global.testStepName = result.description;
        global.testCaseName = result.fullName.replace(global.testStepName, '').trim();
    },
    specDone: function (result) {
        global.testCaseName = '';
        global.testStepName = '';
    },
};

/********************************** Screenshot ***************************************/

var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlScreenshotReporter({
    pathBuilder: function (currentSpec, suites) {
        return currentSpec.fullName;
    },
    dest: 'reports/screenshots/',
    filename: 'failure-report.html',
    ignoreSkippedSpecs: true,
    captureOnlyFailedSpecs: true,
});

/********************************** URL and Reports ***************************************/
exports.config = {
    allScriptsTimeout: 900000,
    seleniumAddress: process.env.SELENIUM_ADDR || 'http://localhost:4444/wd/hub',
    baseUrl: process.env.BASE_URL || 'https://github.com/',
    onPrepare: function () {
      
        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            savePath: 'reports',
        }));
        jasmine.getEnv().addReporter(myReporter);
        // browser.driver.manage().window().maximize();
        browser.driver.manage().window().setSize(1920, 1080);
    },

    jasmineNodeOpts: {
        //If true, print colors to the terminal
        showColors: true,

        //Default time to wait in ms before a test fails
        defaultTimeoutInterval: 900000,

        //detailed stack tracing of o/p
        isVerbose: true

    },


    /********************************** Test Scripts ***************************************/
    specs: [
        "./specs/gitlogin_spec.js",
    ],


    /********************************** Login Credential ***************************************/
    params: {
        credentials: {
            userName: process.env.TEST_USER || '****', // Please replace with your own credentials when testing
            password: process.env.TEST_PASSWORD || '****'     
        },
        timeouts: {
            waitForUrl: 180000,
            waitForElement: 30000,
        },
        disableAnimation: true
    }
}