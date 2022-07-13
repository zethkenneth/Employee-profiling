const pool = require("../../config/database.js");

module.exports = {
  /* READ */
  read_all_offices: async (callBack) => {
    try {
      await pool.query(`SELECT * FROM offices`, (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results.rows);
      });
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  read_office: async (id, callBack) => {
    try {
      await pool.query(
        `SELECT * FROM offices WHERE id = $1`,
        [id],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results.rows);
        }
      );
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },

  /* CREATE */
  create_office: async (data, callBack) => {
    try {
      await pool.query(
        `INSERT INTO offices(office_name) VALUES ($1) RETURNING *`,
        [data.office_name],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results.rows);
        }
      );
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
 update_office: async (id, data, callBack) => {
    try {
      await pool.query(
        `UPDATE offices SET office_name = $1 WHERE id = $2`,[
          data.office_name,id
        ],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results.rows);
        }
      );
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
  /* DELETE */
  delete_office: async (id, callBack) => {
    try {
      await pool.query(
        `DELETE FROM offices WHERE id = $1`,
        [id],
        (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results.rows);
        }
      );
    } catch (error) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  },
};
