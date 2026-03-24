const express = require('express');
const router = express.Router();

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

module.exports = router;
