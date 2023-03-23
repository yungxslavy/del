const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User, Movie, Poll, Vote, Comment } = require('../../models');

router.post('/', async (req, res) => {
  // Route to create a new user
  try {
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  console.log('login route hit');
  res.sendStatus(200);
});


module.exports = router;
