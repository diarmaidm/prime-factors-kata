var request = require('supertest');
var app = require('../../app');
var expect = require('chai').expect;

describe('Prime Factors page', function () {
  it('shows the correct factors of 25.', function (done) {
    request(app).post('/')
    .send({numberToFactor: '25'})
    .end(function (req, res) {
      expect(res.status).to.equal(200);
      expect(res.text).to.contain('5, 5');
      done();
    });
  });

  it('shows the correct factors of 35.', function (done) {
    request(app).post('/')
    .send({numberToFactor: '35'})
    .end(function (req, res) {
      expect(res.status).to.equal(200);
      expect(res.text).to.contain('5, 7');
      done();
    });
  });
});