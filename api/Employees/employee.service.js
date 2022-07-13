const pool = require("../../config/database.js");

module.exports = {
  /* READ */
  read_all_employees: async (callBack) => {
    try {
      await pool.query(`SELECT * FROM employees`, (error, results, fields) => {
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
  read_employee: async (id, callBack) => {
    try {
      await pool.query(
        `SELECT * FROM employees WHERE id = $1`,
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
  create_employee: async (data, callBack) => {
    try {
      await pool.query(
        `INSERT INTO employees(firstname,lastname,phone,gender,position_id,office_id) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *`,
        [
            data.firstname,
            data.lastname,
            data.phone,
            data.gender,
            data.position_id,
            data.office_id,
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
 update_employee: async (id, data, callBack) => {
    try {
      await pool.query(
        `UPDATE employees SET firstname = $1,lastname = $2,phone = $3,gender = $4, position_id= $5, office_id= $6 WHERE id = $7`,[
            data.firstname,
            data.lastname,
            data.phone,
            data.gender,
            data.position_id,
            data.office_id,
            id
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
  delete_employee: async (id, callBack) => {
    try {
      await pool.query(
        `DELETE FROM employees WHERE id = $1`,
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
