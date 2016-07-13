var actions = [
  "correlation-id",
  "slash"
];

var actionsMap = {
};

actions.forEach(function(action) {
  actionsMap[action] = require(`./${action}`);
});

module.exports = actionsMap;
