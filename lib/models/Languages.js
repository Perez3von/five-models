// const pool = require('../utils/pool.js') ;

// module.exports = class Languages {
//   constructor(row) {
//     this.id = row.id;
//     this.language = row.language_name;
//   }
//   //--------------------------------------------------------//
 
//   static async insertLanguages({ language }) {
//     const { rows } = await pool.query(
//       'INSERT INTO languages (language_name) VALUES ($1) RETURNING *',
//       [language]
//     );
//     return new Languages(rows[0]);
//   }
//   //--------------------------------------------------------//

//   static async getLanguage(repo_id) {
//     const { rows } = await pool.query(
//       'SELECT * FROM languages WHERE languages.id= $1', [repo_id]
//     );
//     return new Languages(rows[0]);

//   }
//   //--------------------------------------------------------//
//   static async getAllLanguages() {
//     const { rows } = await pool.query(
//       'SELECT * FROM languages'
//     );
//     return rows;
//   }

//   //--------------------------------------------------------//
//   static async updateLanguage(lang_id, lang_name) {
    
//     const { rows } = await pool.query(
//       'UPDATE languages SET language_name = $2 WHERE id = $1 RETURNING *', [lang_id, lang_name]
//     );
//     return new Languages(rows[0]);
//   }
//   //--------------------------------------------------------//
//   static async addToLanguages(value) {
//     const { rows } = await pool.query(
//       'INSERT INTO languages (language_name) VALUES ($1)', [value]
//     );
//     return new Languages(rows[0]);
//   }
//   //--------------------------------------------------------//


//   static async deleteLanguage(repo_id) {
  
//     const { rows } = await pool.query(
//       'DELETE FROM languages WHERE id = $1', [repo_id]
//     );
//   }
//   //--------------------------------------------------------//



// }
