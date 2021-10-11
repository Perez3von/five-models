// const pool = require('../utils/pool.js') ;

// module.exports = class Repository {
//   constructor(row) {
//     this.id = row.id;
//     this.name = row.repo_name;
//   }
//   //--------------------------------------------------------//
//   static async insertRepos({ name }) {
//     const { rows } = await pool.query(
//       'INSERT INTO repos (repo_name) VALUES ($1) RETURNING *',
//       [name]
//     );
//     return new Repository(rows[0]);
//   }
//   //--------------------------------------------------------//

  
//   static async getRepo(repo_id) {
//     const { rows } = await pool.query(
//       'SELECT * FROM repos WHERE repos.id= $1', [repo_id]
//     );
//     return new Repository(rows[0]);
//   }
//   //--------------------------------------------------------//

//   static async getAllRepo() {
//     const { rows } = await pool.query(
//       'SELECT * FROM repos'
//     );
//     return rows;
//   }

//   //--------------------------------------------------------//
//   static async updateRepo(repo_id, repo_name) {
    
//     const { rows } = await pool.query(
//       'UPDATE repos SET repo_name = $2 WHERE id = $1 RETURNING *', [repo_id, repo_name]
//     );
//     return new Repository(rows[0]);
//   }
//   //--------------------------------------------------------//

//   static async addToRepo(value) {
//     const { rows } = await pool.query(
//       'INSERT INTO repos (repo_name) VALUES ($1) RETURNING *', [value]
//     );
//     return new Repository(rows[0]);
//   }

//   //--------------------------------------------------------//
//   static async deleteRepo(repo_id) {
  
//     const { rows } = await pool.query(
//       'DELETE FROM repos WHERE id = $1', [repo_id]
//     );
//   }
//   //--------------------------------------------------------//



// }
