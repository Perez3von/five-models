import pool from '../lib/utils/pool.js';

export default class Repository {
  constructor(row) {
    this.id = row.id;
    this.author = row.author;
    this.name = row.repo_name;
    this.description = row.description_name;
    this.url = row.url_name;
    this.stars = row.stars;
    this.forks = row.forks;
    this.language = row.language_name;
  }

  static async insert({ author, name, description, url, stars, forks, language }) {
    const { rows } = await pool.query(
      'INSERT INTO repos (author, repo_name, description_name, url_name, stars, forks, language_name) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
      [author, name, description, url, stars, forks, language]
    );
    return new Repository(rows[0]);
  }


  static async getRepo(repo_id) {
    const {rows} = await pool.query(
      'SELECT * FROM repos WHERE repos.id= $1', [repo_id]
    );
    return new Repository(rows[0]);
  }
}
