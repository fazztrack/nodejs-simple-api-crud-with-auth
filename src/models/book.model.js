const db = require("../configs/db")
module.exports = {
  getAll: () => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM `books`', (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  },
  getDetail: (id) => {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM `books` WHERE id=?',[id], (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  },
  create: ({title, description, author}) => {
    return new Promise((resolve, reject) => {
      db.query('INSERT INTO `books` (`title`, `description`, `author`) VALUES (?,?,?)',[title, description, author], (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  },
  update: ({id, title, description, author}) => {
    return new Promise((resolve, reject) => {
      db.query('UPDATE `books` SET `title`=?,`description`=?,`author`=? WHERE id=?',[title, description, author, id], (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  },
  destroy: (id) => {
    return new Promise((resolve, reject) => {
      db.query('DELETE FROM `books` WHERE id=?',[id], (err, rows, fields) => {
        if(err) reject(err)
        resolve(rows)
      });
    })
  },
}