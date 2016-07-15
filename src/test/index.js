var index = require('../index');
var fail = require("chai").assert.fail;

it('should invoke the handler', (done) => {
  var event = {
    action: "hide-the-pain"
  };
  var context = {};
  var callback = function(err, data) {
    if(err) {
      fail(0,1,"Did not expect an error: "+err);
    } else {
      done();
    }
  };
  index.handler(event, context, callback);
});
