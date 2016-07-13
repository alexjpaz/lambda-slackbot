var actions = [
  "correlation-id",
  "slash",
  "hold-the-pain"
];

var actionsMap = {
};

actions.forEach(function(action) {
  actionsMap[action] = require(`./${action}`);
});

module.exports = actionsMap;
