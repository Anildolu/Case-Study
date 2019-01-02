// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
 const config = require('../config');
const expect = chai.expect;

chai.should();
chai.use(chaiHttp);

// Get the URL for git API
let restURL = function () {
  return config.restBaseUrl + '/';
};

  describe('DELETE - Test Scenario ', () => {
   
    it(`TC-01 : test the error code 204`, (done) => {
      chai.request(restURL())
        .delete('repos/Anildolu/REST_API-Testing')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });
    it(`TC-02 : test the error code 404 `, (done) => {
      chai.request(restURL())
        .delete('repos/Anildolu/REST_API-Testing')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(404);
          expect(res.body.message).to.equal('Not Found');
          expect(res.body.documentation_url).to.equal('https://developer.github.com/v3/repos/#delete-a-repository');
          done();
        });
    });
});
