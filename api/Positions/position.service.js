const pool = require("../../config/database.js");

module.exports = {
  /* READ */
  read_all_positions: async (callBack) => {
    try {
      await pool.query(`SELECT * FROM positions`, (error, results, fields) => {
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
  read_position: async (id, callBack) => {
    try {
      await pool.query(
        `SELECT * FROM positions WHERE id = $1`,
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
  create_position: async (data, callBack) => {
    try {
      await pool.query(
        `INSERT INTO positions(position_name) VALUES ($1) RETURNING *`,
        [data.position_name],
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
 update_position: async (id, data, callBack) => {
    try {
      await pool.query(
        `UPDATE positions SET position_name = $1 WHERE id = $2`,[
          data.position_name,id
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
  delete_position: async (id, callBack) => {
    try {
      await pool.query(
        `DELETE FROM positions WHERE id = $1`,
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
