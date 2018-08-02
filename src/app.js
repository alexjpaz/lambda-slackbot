const express = require('express');
const app = express();

const actions = require('./actions');

const logger = console;

app.get('/:action', async (req, res) => {
  const { action } = req.params;

  const fn = actions[action];

  try {
    const result = await fn(req);
    res.send(result);
  } catch(e) {
    logger.error(e);
    res.status(500);
    res.send(e);
  }
});

app.get('/', function (req, res) {
  res.send('ping')
})

app.get('/ping', function (req, res) {
  res.send('ping')
})

module.exports = app;
