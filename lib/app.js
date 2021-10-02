import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';
import repos from './middleware/repos.js';
import Repository from '../models/Repository.js';
const app = express();


app.use(express.json());
// .use('/api/repos', (req, res) => {
//   console.log('helolowlo');
//     res.end();
// });
app.use('/api/repos', repos);
app.get('/api/repo/:id', async (req, res, next) => {
  try{
    const repo_id = req.params.id; 
    const repo = await Repository.getRepo(repo_id); 
    res.json(repo);
  }catch(error){
    next(error);
  }
 
});

app.use('/api/repos/all', repos);
app.use('/api/repos/stars', repos);
app.use('/api/repos/forks', repos);
app.use('/api/repos/popular', repos);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
