import { apiCall } from '../utils/helper.js';
import { Router } from 'express';
import Authors from '../../models/Authors.js';



export default Router()

  .get('/', async (req, res, next) => {
    try {
      
      const data = await apiCall();
      const only_authors = data.map((repo) => repo.author);
      res.json(only_authors);
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await apiCall();
      const savedData = await Promise.all(data.map(async (repo)  => await Authors.insertAuthors(repo)));
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async (req, res, next) => {
    try {
      const data = await apiCall();
      const repo_id = req.params.id;
      const savedData =  await Authors.insertAuthors(data[repo_id]);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const author = req.query.name;
      const savedData = await Authors.updateAuthor(repo_id, author);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const savedData = await Authors.deleteAuthor(repo_id);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  });