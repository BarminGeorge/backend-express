const express = require('express');
const router = express.Router();

const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('mydb.db');
db.run(`CREATE TABLE IF NOT EXISTS users (
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   name text)`);

const insert = "INSERT INTO users (name) VALUES (?)";


/* GET users listing. */
router.get('/', function(req, res, next) {
  db.all("SELECT id, name FROM users", [], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

router.get('/:id',  function(req, res, next) {
  const userId = parseInt(req.params.id);
  db.all("SELECT id, name FROM users WHERE id = (?)", [userId], (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

router.post('/', function(req, res, next) { 
  let newUser = req.body.name;
  db.run(insert, [newUser]);
  res.status(201).json(newUser);
});

module.exports = router;
