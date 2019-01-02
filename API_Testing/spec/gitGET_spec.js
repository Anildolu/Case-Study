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
          expect(res.body[0].commit.author.name).to.be.equal("anil");
          expect(res.body[0].commit.author.email).to.be.equal("doluanil@gmail.com");
          expect(res.body[0].commit.committer.name).to.be.equal("anil");
          expect(res.body[0].commit.committer.email).to.be.equal("doluanil@gmail.com");
          expect(res.body[0].commit.message).to.be.equal("updated the credintioals");
          done();
        });
    });

    it(`TC-02 : test the git contribiters`, (done) => {
      chai.request(restURL())
        .get('repos/Anildolu/Case-Study/contributors')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body[0].login).to.be.equal("Anildolu");
          expect(res.body[0].id).to.be.equal(25811285);
          expect(res.body[0].node_id).to.be.equal("MDQ6VXNlcjI1ODExMjg1");
          expect(res.body[0].avatar_url).to.be.equal("https://avatars0.githubusercontent.com/u/25811285?v=4");
          expect(res.body[0].type).to.be.equal("User");
          expect(res.body[0].site_admin).to.be.equal(false);
          expect(res.body[0].contributions).to.be.equal(14);
          done();
        });
    });

    it(`TC-03 : test the git repo language`, (done) => {
      chai.request(restURL())
        .get('repos/Anildolu/Case-Study/languages')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body.JavaScript).to.be.equal(14802);
          done();
        });
    })
    
    it(`TC-04 : test the git repos `, (done) => {
      chai.request(restURL())
        .get('users/Anildolu/repos')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body[0].id).to.be.equal(162714285);
          expect(res.body[0].node_id).to.be.equal("MDEwOlJlcG9zaXRvcnkxNjI3MTQyODU=");
          expect(res.body[0].name).to.be.equal("Case-Study");
          expect(res.body[0].full_name).to.be.equal("Anildolu/Case-Study");
          expect(res.body[0].private).to.be.equal(false);
          expect(res.body[1].id).to.be.equal(162962409);
          expect(res.body[1].node_id).to.be.equal("MDEwOlJlcG9zaXRvcnkxNjI5NjI0MDk=");
          expect(res.body[1].name).to.be.equal("Selenium_Test");
          expect(res.body[1].full_name).to.be.equal("Anildolu/Selenium_Test");
          expect(res.body[1].private).to.be.equal(false);
          done();
        });
    })
    it(`TC-05 : test the git repo branches`, (done) => {
      chai.request(restURL())
        .get('repos/Anildolu/Case-Study/branches')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(200);
          expect(res.body[0].name).to.be.equal("Anildolu-patch-1");
          expect(res.body[0].commit.sha).to.be.equal("4bfe11708086c1db1c3806fd070a47f69a236d16");
          expect(res.body[0].commit.url).to.be.equal("https://api.github.com/repos/Anildolu/Case-Study/commits/4bfe11708086c1db1c3806fd070a47f69a236d16");
          expect(res.body[1].name).to.be.equal("Anildolu-patch-2");
          expect(res.body[2].name).to.be.equal("Anildolu-patch-3");
          expect(res.body[3].name).to.be.equal("Anildolu-patch-4");
          expect(res.body[4].name).to.be.equal("master");
          done();
        });
    })
   
});
