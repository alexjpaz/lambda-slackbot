exports.handler = (event, context, callback) => {
  // TODO implement
  callback(null, {
    text: "Hello" + event.action,
    icon_url: "http://i.imgur.com/7Sg9EpC.png"
  });
};
