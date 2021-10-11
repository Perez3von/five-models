const express = require('express');
const notFoundMiddleware = require('./middleware/not-found.js');
const errorMiddleware = require('./middleware/error.js');
const repos = require('./controllers/repos.js');
// const languages = require('./controllers/language.js');
// const authors = require('./controllers/authors.js');
// const stars = require('./controllers/stars.js');
// const forks = require('./controllers/forks.js');
const app = express();


app.use(express.json());
app.use('/api/repos', repos);
// app.use('/api/languages', languages);
// app.use('/api/authors', authors);
// app.use('/api/stars', stars);
// app.use('/api/forks', forks);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

module.exports = app;
