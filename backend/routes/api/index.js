const express = require('express');
const router = express.Router();

const users = require('./users')
const character = require('./character')
const auth = require('./auth')


router.use('/user', users);
router.use('/character', character)
router.use('/auth', auth)
module.exports = router;