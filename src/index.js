var actions = require('./actions/index');

exports.handler = (event, context, callback) => {
  try {
    actions.invoke({
      name: event.action,
      params: event.body,
      callback: callback
    });
  } catch(e) {
    callback(e);
  }
};
