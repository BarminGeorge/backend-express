const express = require('express');
const router = express.Router();

let id = 3
const array = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"array": array});
});

router.get('/:id',  function(req, res, next) {
  const userId = parseInt(req.params.id);
  const user = array.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

router.post('/', function(req, res, next) { 
  let newUser = req.body;
  id += 1;
  const createdUser = {
    id: id,
    name: newUser.name
  };
  array.push(createdUser);
  res.status(201).json(createdUser);
});

module.exports = router;
