import pool from '../lib/utils/pool.js';

export default class Authors {
  constructor(row) {
    this.id = row.id;
    this.author = row.author;
  }
  //--------------------------------------------------------//
 
  static async insertAuthors({ author }) {
    const { rows } = await pool.query(
      'INSERT INTO authors (author) VALUES ($1) RETURNING *',
      [author]
    );
    return new Authors(rows[0]);
  }
  //--------------------------------------------------------//

  static async getAuthor(repo_id) {
    const { rows } = await pool.query(
      'SELECT * FROM authors WHERE authors.id= $1', [repo_id]
    );
    return new Authors(rows[0]);

  }
  //--------------------------------------------------------//
  static async getAllAuthors() {
    const { rows } = await pool.query(
      'SELECT * FROM authors'
    );
    return rows;
  }

  //--------------------------------------------------------//
  static async updateAuthor(author_id, author_name) {
    
    const { rows } = await pool.query(
      'UPDATE authors SET author = $2 WHERE id = $1 RETURNING *', [author_id, author_name]
    );
    return new Authors(rows[0]);
  }
  //--------------------------------------------------------//
  static async addToAuthors(value) {
    const { rows } = await pool.query(
      'INSERT INTO authors (author) VALUES ($1)', [value]
    );
    return new Authors(rows[0]);
  }
  //--------------------------------------------------------//


  static async deleteAuthor(repo_id) {
  
    const { rows } = await pool.query(
      'DELETE FROM authors WHERE id = $1', [repo_id]
    );
  }
  //--------------------------------------------------------//



}
