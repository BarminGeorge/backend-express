const express = require('express');
const router = express.Router();
let array =[]
/* GET users listing. */
router.get('/', function(req, res, next) {
  let array = [];
  array.push({
    "id": 1,
    "name": "Бармин Георгий"
  });
  array.push({
    "id": 2,
    "name": "Москвина Александра"
  });
  res.send({"array": array});
});

router.post('/', function(req, res, next) { 
  let newUser = req.body;
  array.push(newUser);
  res.status(201).json(newUser);
});

module.exports = router;
