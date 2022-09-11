const mysql = require("mysql");
const { MYSQL_CONFIG } = require("../config/db.js");

const con = mysql.createConnection(MYSQL_CONFIG);
con.connect();

// the function to execute sql
function exec(sql) {
  const promise = new Promise((resolve, reject) => {
    con.query(sql, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });

  return promise;
}


module.exports = { exec };