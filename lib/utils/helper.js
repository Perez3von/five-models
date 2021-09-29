import fetch from 'node-fetch';


const base_url = 'https://api.trending-github.com/github';


export async function apiCall(){

  const response = await fetch(`${base_url}/repositories`);
  const body = await response.json();

  console.log(body);

  return body;


}
