const db = require("../configs/db")
module.exports = {
  login: (email) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM `users` WHERE email=?',[email], (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  },
  register: ({email, password}) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO `users` (email, password) VALUES (?,?)',[email, password], (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  }
}