const mysql = require("mysql");

// const pool = mysql.createPool({
//   connectionLimit: 10,
//   host: "mysql",
//   user: "root",
//   password: "root",
//   database: "myapp",
// });

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST, //RDS 호스트
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
});

exports.pool = pool;
