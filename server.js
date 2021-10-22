const express = require('express');
const path = require('path');

// Applies a port number provided by HEROKU or uses local 3001
const PORT = process.env.PORT || 3001;

// Initializes Express.js
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import our modular routers for /tips and /feedback
const htmlRouter = require('./routes/html');
const apiRouter = require('./routes/api');

// Prefaces each path with either '/' or '/api' to direct user to correct page
app.use('/', htmlRouter);
app.use('/api', apiRouter);

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));

// Opens a live server and supplies a easier to use link
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
