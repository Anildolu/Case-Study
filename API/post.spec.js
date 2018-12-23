// Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
 const config = require('./config');
// const helperInstance = require('../auth');
const expect = chai.expect;

chai.should();
chai.use(chaiHttp);

// Get the URL for counterparty API
let restURL = function () {
  return config.restBaseUrl + '/';
};

  describe('POST - Negative scenarios tests', () => {
    let postpayload={ 
      albumId: '1',
      id: '120',
      title: 'accusamus',
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952"
  };
   
    it(`TC-01 : test to create the new `, (done) => {
      chai.request(restURL())
        .post('/posts')
        .send(postpayload)
       // .set('Authorization', helperInstance.getAuthHeaderSync())
        .end((err, res) => {
          res.should.have.status(201);
          done();
        });
    });
});
