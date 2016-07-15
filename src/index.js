var actions = require('./actions/index');

exports.handler = (event, context, callback) => {
  if(actions[event.action]) {
    callback(null, actions[event.action](event.body));
  } else {
    callback(`Action ${event.action} not found`);
  }
};
