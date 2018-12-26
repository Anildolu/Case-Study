// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
 const config = require('../config');
// const helperInstance = require('../auth');
const expect = chai.expect;

chai.should();
chai.use(chaiHttp);

// Get the URL for counterparty API
let restURL = function () {
  return config.restBaseUrl + '/';
};

  describe('DELETE - Negative scenarios tests', () => {
   
    it(`TC-01 : test to create the new`, (done) => {
      chai.request(restURL())
        .delete('repos/Anildolu/REST_API-Testing')
        .set('Authorization', config.basicAuth)
        .end((err, res) => {
          res.should.have.status(204);
          done();
        });
    });

    // it(`TC-01 : test to create the new`, (done) => {
    //   let postpayload1={ 
    //     base: "master",
    //     head: "Anildolu-patch-5",
    //     commit_message: "Shipped cool_feature!"
    //       };
    //   chai.request(restURL())
    //     .post('repos/Anildolu/Case-Study/merges')
    //     .send(postpayload1)
    //     .set('Authorization', config.basicAuth)
    //     .end((err, res) => {
    //       console.log(JSON.stringify(res));
    //       res.should.have.status(404);
    //       res.body.message
    //       expect(res.body.message).to.contains("Head does not exist");
    //       done();
    //     });
    // });
});
