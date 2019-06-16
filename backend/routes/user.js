const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

const User = require('../models/user');

router.post('', (req, res, next) => {
  User.findOne({
    username: req.body.username,
    password: req.body.password
  }, function (err, user) {
    if (err || !user) {
      res.status(404).json({
        message: 'User not found',
      });
    }
  })
    .then(document => {
      res.status(200).json({
        message: 'Successfully SignedIn',
        user: document,
        token: '1029384756'
      });
    });
});

module.exports = router;