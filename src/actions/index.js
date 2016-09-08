var actions = [
  "correlation-id",
  "slash",
  "hide-the-pain",
  "bees",
  "sanic"
];

var actionsMap = {
};

actions.forEach(function(action) {
  actionsMap[action] = require(`./${action}`);
});

module.exports = actionsMap;
