import { apiCall } from '../utils/helper.js';
import { Router } from 'express';
import Stars from '../../models/Stars.js';



export default Router()

  .get('/', async (req, res, next) => {
    try {
      
      const data = await apiCall();
      const only_Stars = data.map((repo) => repo.stars);
      res.json(only_Stars);
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await apiCall();
      const savedData = await Promise.all(data.map(async (repo)  => await Stars.insertStars(repo)));
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async (req, res, next) => {
    try {
      const data = await apiCall();
      const repo_id = req.params.id;
      const savedData =  await Stars.insertStars(data[repo_id]);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const star_val = req.query.name;
      const savedData = await Stars.updateStar(repo_id, star_val);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const savedData = await Stars.deleteStar(repo_id);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  });