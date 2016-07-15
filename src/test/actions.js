const actions = require('../actions/index');
const expect = require('chai').expect;

it('should hide the pain', (done) => {
  actions.invoke({
    name: "hide-the-pain",
    callback: function(result) {
      expect(result.username).to.equal("Harold");
      done();
    }
  });
});

it('should bees', () => {
  var result = actions["bees"]();
  expect(result.username).to.equal("oprah");
});
