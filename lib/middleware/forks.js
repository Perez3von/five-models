import { apiCall } from '../utils/helper.js';
import { Router } from 'express';
import Forks from '../../models/Forks.js';



export default Router()

  .get('/', async (req, res, next) => {
    try {
      
      const data = await apiCall();
      const only_forks = data.map((repo) => repo.forks);
      res.json(only_forks);
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await apiCall();
      const savedData = await Promise.all(data.map(async (repo)  => await Forks.insertForks(repo)));
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async (req, res, next) => {
    try {
      const data = await apiCall();
      const repo_id = req.params.id;
      const savedData =  await Forks.insertForks(data[repo_id]);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const fork_val = req.query.name;
      const savedData = await Forks.updateForks(repo_id, fork_val);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const savedData = await Forks.deleteFork(repo_id);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  });