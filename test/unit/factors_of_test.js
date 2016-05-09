var assert = require('assert');
var factorsOf = require('../../routes/factorsOf');
describe('Prime Factors', function () {
  it('diaplays the prime factors of 25', function (done) {
    assert.deepEqual(factorsOf(25),[5,5]);
    done();
  });
});