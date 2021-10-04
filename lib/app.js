import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import repos from './middleware/repos.js';
import languages from './middleware/language.js';
import authors from './middleware/authors.js';
import stars from './middleware/stars.js';
import forks from './middleware/forks.js';
const app = express();


app.use(express.json());
app.use('/api/repos', repos);
app.use('/api/languages', languages);
app.use('/api/authors', authors);
app.use('/api/stars', stars);
app.use('/api/forks', forks);
app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
