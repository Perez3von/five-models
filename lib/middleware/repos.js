
import { apiCall } from '../utils/helper.js';
import { Router } from 'express';
import Repository from '../../models/Repository.js';



export default Router()

  .get('/', async (req, res, next) => {
    try {
      
      const data = await apiCall();
      const savedData = await Promise.all(data.map(async (repo)  => await Repository.insert(repo)));
      console.log('ITS A ME MARIO');
      res.json(savedData);
    } catch (error) {
      next(error);
    }
  });
// .get('/', (req, res, next) => {
//   try{

//     const repo_id = req.params.id; 
//     const repo = Repository.getRepo(repo_id);
//     console.log("ITS A ME LUIGI");
//     res.json(repo);

//   } catch(error){
//     next(error);
//   }

// });
