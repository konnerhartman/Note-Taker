// const express = require('express');
// const path = require('path');
// const PORT = 3001;

// const htmlRouter = require('./routes/html.js');
// const notesRouter = require('./routes/notes.js');


// const app = express();

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(express.static('public'));

// app.use('./routes/html', htmlRouter);
// app.use('./routes/notes', notesRouter);


// app.listen(PORT, () => 
//   console.info(`Example app listening at http://localhost:${PORT}`)
// );

const express = require('express');
const path = require('path');

const PORT = 3001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import our modular routers for /tips and /feedback
const htmlRouter = require('./routes/html');
const apiRouter = require('./routes/api');

app.use('/', htmlRouter);
app.use('/api', apiRouter);

// Middleware for parsing JSON and urlencoded form data
app.use(express.static('public'));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
