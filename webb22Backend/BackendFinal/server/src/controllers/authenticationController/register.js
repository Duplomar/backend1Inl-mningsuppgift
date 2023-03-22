const mysql = require("mysql2");
require("dotenv").config();
const config = {
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_DATABASE,
};
const pool = mysql.createPool(config);

const register = function register(req, res) {
  console.log(req);
  const { username, password } = req.body;
  const sql = `INSERT INTO users(username, password) values(?,?)`;
  pool.execute(sql, [username, password], (error, result) => { // REPLACE pool.execute with pool.query
    if (error) {
      console.log(error);
      res.status(500).send("Database retrive error");
    } else {
      console.log(success);
      res.JSON({ Status: "User registred", result: result }).sendStatus(200);
    }
  });
  res.status(201).send("Added user");
};
exports.register = register;
