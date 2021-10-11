// const pool = require('../utils/pool.js') ;

// module.exports = class Forks {
//   constructor(row) {
//     this.id = row.id;
//     this.fork = row.fork;
//   }
//   //--------------------------------------------------------//
 
//   static async insertForks({ forks }) {
//     const { rows } = await pool.query(
//       'INSERT INTO forks (fork) VALUES ($1) RETURNING *',
//       [forks]
//     );
//     return new Forks(rows[0]);
//   }
//   //--------------------------------------------------------//

//   static async getFork(repo_id) {
//     const { rows } = await pool.query(
//       'SELECT * FROM forks WHERE forks.id= $1', [repo_id]
//     );
//     return new Forks(rows[0]);

//   }
//   //--------------------------------------------------------//
//   static async getAllForks() {
//     const { rows } = await pool.query(
//       'SELECT * FROM forks'
//     );
//     return rows;
//   }

//   //--------------------------------------------------------//
//   static async updateForks(fork_id, val) {
    
//     const { rows } = await pool.query(
//       'UPDATE forks SET fork = $2 WHERE id = $1 RETURNING *', [fork_id, val]
//     );
//     return new Forks(rows[0]);
//   }
//   //--------------------------------------------------------//

//   //--------------------------------------------------------//
//   // static async addToForks(value) {
//   //   const { rows } = await pool.query(
//   //     'INSERT INTO forks (fork) VALUES ($1)', [value]
//   //   );
//   //   return new Forks(rows[0]);
//   // }
//   //--------------------------------------------------------//

//   //--------------------------------------------------------//
//   static async deleteFork(repo_id) {
  
//     const { rows } = await pool.query(
//       'DELETE FROM forks WHERE id = $1', [repo_id]
//     );
//   }
//   //--------------------------------------------------------//



// }
