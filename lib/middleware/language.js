import { apiCall } from '../utils/helper.js';
import { Router } from 'express';
import Languages from '../../models/Languages.js';



export default Router()

  .get('/', async (req, res, next) => {
    try {
      
      const data = await apiCall();
      const only_lang = data.map((repo) => repo.language);
      res.json(only_lang);
    } catch (error) {
      next(error);
    }
  })
  .post('/', async (req, res, next) => {
    try {
      const data = await apiCall();
      const savedData = await Promise.all(data.map(async (repo)  => await Languages.insertLanguages(repo)));
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .post('/:id', async (req, res, next) => {
    try {
      const data = await apiCall();
      const repo_id = req.params.id;
      const savedData =  await Languages.insertLanguages(data[repo_id]);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const repo_name = req.query.name;
      const savedData = await Languages.updateLanguage(repo_id, repo_name);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      const repo_id = req.params.id;
      const savedData = await Languages.deleteLanguage(repo_id);
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  });