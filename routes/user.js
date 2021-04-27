const express = require('express');

const router = express.Router();

const User = require('../controllers/UserController');

router.post('/login', User.login);
router.post('/signUp', User.signUp);
router.get('/', User.index);

module.exports = router;
