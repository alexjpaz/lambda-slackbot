const actions = require('../actions/index');
const expect = require('chai').expect;

it('should hide the pain', () => {
  var result = actions["hide-the-pain"]();
  expect(result.username).to.equal("Harold");
});

it('should bees', () => {
  var result = actions["bees"]();
  expect(result.username).to.equal("oprah");
});
