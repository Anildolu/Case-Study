// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
 const config = require('../config');
// const helperInstance = require('../auth');
const gitExpect = require('../expectData/gitCommit.expectData.js');
const expect = chai.expect;

chai.should();
chai.use(chaiHttp);

// Get the URL for git API
let restURL = function () {
  return config.restBaseUrl + '/';
};

  describe('GET - Test Scenario', () => {
   
    it(`TC-01 : test the git commits`, (done) => {
      chai.request(restURL())
        .get('repos/Anildolu/Case-Study/commits')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(200);
          res.body[0].should.be.eql(gitExpect);
          done();
        });
    });

    it(`TC-01 : test the git contribiters`, (done) => {
      chai.request(restURL())
        .get('repos/Anildolu/Case-Study/contributors')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });

    it(`TC-01 : test the git repo language`, (done) => {
      chai.request(restURL())
        .get('repos/Anildolu/Case-Study/languages')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.JavaScript).to.be.equal(13123);
          done();
        });
    })
});
