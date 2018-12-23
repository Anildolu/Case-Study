'use strict';
var cognitivescalePage = require('../pageObject/cognitivescale.js');


describe("CognitiveScale Page", function () {
    beforeAll(function (done) {
browser.ignoreSynchronization = true;
        browser.get('https://www.cognitivescale.com');
        done();
    });

    it('Testing the Commission', function () {
        console.log(`-------------- ${global.testCaseName} --------------`);
      
        browser.get('https://www.cognitivescale.com/careers/')  // browser.waitForAngular();
      // https://www.cognitivescale.com/careers/
    //    browser.waitForAngularEnabled(false)

    //  browser.actions().mouseMove(cognitivescalePage.elements.company).perform();
    // // cognitivescalePage.elements.company.click();
    // //browser.waitForAngular();
    // browser.waitForAngularEnabled(true);

    //     cognitivescalePage.elements.carrers.click();
       // browser.waitForAngular();

    });
});
