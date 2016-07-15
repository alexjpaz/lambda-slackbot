const actions = require('../actions/index');
const expect = require('chai').expect;

it('should hide the pain', () => {
  var result = actions["hide-the-pain"]();
  expect(result.username).to.equal("Harold");
});
