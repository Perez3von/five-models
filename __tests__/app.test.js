import pool from '../lib/utils/pool.js';
import setup from '../data/setup.js';
import request from 'supertest';
import app from '../lib/app.js';
import actual from'../data/actual.js';
describe('demo routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('gets api repo data', () => {
   return request(app)
   .get('/api/repos')
  //  .send()
   .then(()=>{
     expect().toEqual();
   })
  
    expect().toEqual(actual);
  });

  afterAll(() => {
    pool.end();
  });
});
