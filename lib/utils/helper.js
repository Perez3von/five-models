const fetch  = require('node-fetch') ;
//const nodemon = require('nodemon') ;
// import fetch from 'node-fetch';


const base_url = 'https://api.trending-github.com/github';


async function apiCall(){

  const response = await fetch(`${base_url}/repositories`);
  const body = await response.json();

  return body;


}

module.exports = apiCall;
