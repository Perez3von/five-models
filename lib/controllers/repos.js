
const  apiCall  = require('../utils/helper.js') ;
const Router  = require('express') ;
const Repository = require('../models/Repository.js') ;


module.exports = Router()

  .get('/', async (req, res, next) => {
    try {
      
      const data = await apiCall();
      res.json(data);
    } catch (error) {
      next(error);
    }
  });
  
//   .post('/all', async (req, res, next) => {
//     try {
//       const data = await apiCall();
//       const savedData = await Promise.all(data.map(async (repo)  => await Repository.insertRepos(repo)));
//       res.json(savedData);
//     } catch (error) {
//       next(error);
//     }
//   })
//   .post('/:id', async (req, res, next) => {
//     try {
//       const data = await apiCall();
//       const repo_id = req.params.id;
//       const savedData =  await Repository.insertRepos(data[repo_id]);
//       res.json(savedData);
//     } catch (error) {
//       next(error);
//     }
//   })
//   .put('/:id', async (req, res, next) => {
//     try {
//       const repo_id = req.params.id;
//       const repo_name = req.query.name;
//       const savedData = await Repository.updateRepo(repo_id, repo_name);
//       res.json(savedData);
//     } catch (error) {
//       next(error);
//     }
//   })
//   .delete('/:id', async (req, res, next) => {
//     try {
//       const repo_id = req.params.id;
//       const savedData = await Repository.deleteRepo(repo_id);
//       res.json(savedData);
//     } catch (error) {
//       next(error);
//     }
//   });


