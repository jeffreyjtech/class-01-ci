// jest knows this is a test file because it's named whatever-the-fuck-name-Im-using.test.js
'use strict';

const supertest = require ('supertest');
const app = require('../server/app.js');
const request = supertest(app);

// jest injects values and objects into our runtime environment, and we call this special version of the runtime the "test environment"
describe('Testing our HTTP API', () => {
  // "it" is a method from jest, which uses the callback function in the 2nd argument to test your code.
  it('Respond with status 200 to GET request to /hello route', async () => {
    // We need async...await for the test to wait for the request to complete
    const response =  await request.get('/hello');

    expect(response.status).toEqual(200);
  });
});
