const express = require('express');
const router = express.Router();

const array = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com' }
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({"array": array});
});

/* GET user by ID */
router.get('/:id',  function(req, res, next) {
  const userId = parseInt(req.params.id);
  const user = array.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user);
});

module.exports = router;
