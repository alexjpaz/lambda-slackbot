var app = require('../src/app');
var fail = require("chai").assert.fail;

const request = require('supertest')(app);

it('should invoke', async () => {
  await request.get('/sanic')
    .expect(200, /Sanic/);
})

it('should throw error', async () => {
  await request.get('/no_worky')
    .expect(500);
})
