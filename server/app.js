'use strict';

// express is a framework for responding to http requests
// The require method does not need a proper path because we have express in our package.json dependencies and installed the the node_modules folder

const express = require('express'); 

// We should only run this once.
const app = express(); // Creates our first "singleton"

// Now that express is instantiated, we can use the .get() method for responding to get requests

// the callback function will be given two objects and a function as arguments when called by express.js magic.
// These are commonly called request, response, and next, and their shape is defined in express docs.
// We use those as our parameter names for everyone's sanity.
app.get('/hello', (request, response, next) => {
  response.send('Hello World');
});

module.exports = app;
