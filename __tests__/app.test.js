const pool = require('../lib/utils/pool.js') ;
const setup = require('../data/setup.js') ;
const request = require('supertest') ;
const app = require('../lib/app.js') ;
const apiCall = require('../lib/utils/helper.js');
describe('demo routes', () => {
  beforeAll(() => {
    return setup(pool);
  });
  //-------------------------------------------------//
  it('gets api repo data', async () => {
    const api_data = await apiCall();
    const res = await request(app).get('/api/repos');
    expect(api_data).toEqual(res.body);
  });
   
  //--------------------------------------------//
  //-------------------------------------------------//
  // it('gets api repo data', () => {
  //   const res = request(app).get('/api/repos')
  //   expect(res[0]).toEqual()
 
 
  //--------------------------------------------//
  afterAll(() => {
    pool.end();
  });
  //------------------------------------------//
});
