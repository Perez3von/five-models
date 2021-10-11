// const pool = require('../utils/pool.js') ;

// module.exports = class Stars {
//   constructor(row) {
//     this.id = row.id;
//     this.star = row.stars;
//   }
//   //--------------------------------------------------------//
 
//   static async insertStars({ stars }) {
//     const { rows } = await pool.query(
//       'INSERT INTO stars (stars) VALUES ($1) RETURNING *',
//       [stars]
//     );
//     return new Stars(rows[0]);
//   }
//   //--------------------------------------------------------//

//   static async getStar(repo_id) {
//     const { rows } = await pool.query(
//       'SELECT * FROM stars WHERE stars.id= $1', [repo_id]
//     );
//     return new Stars(rows[0]);

//   }
//   //--------------------------------------------------------//
//   static async getAllStars() {
//     const { rows } = await pool.query(
//       'SELECT * FROM stars'
//     );
//     return rows;
//   }

//   //--------------------------------------------------------//
//   static async updateStar(star_id, val) {
    
//     const { rows } = await pool.query(
//       'UPDATE stars SET stars = $2 WHERE id = $1 RETURNING *', [star_id, val]
//     );
//     return new Stars(rows[0]);
//   }
//   //--------------------------------------------------------//
//   static async addToStars(value) {
//     const { rows } = await pool.query(
//       'INSERT INTO stars (stars) VALUES ($1)', [value]
//     );
//     return new Stars(rows[0]);
//   }
//   //--------------------------------------------------------//


//   static async deleteStar(repo_id) {
  
//     const { rows } = await pool.query(
//       'DELETE FROM stars WHERE id = $1', [repo_id]
//     );
//   }
//   //--------------------------------------------------------//



// }