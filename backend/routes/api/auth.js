const service = require('../services/auth.service');
const express = require('express');
const router = express.Router();

router.post('/login', service.login);
router.get('/logout',service.logout);

module.exports = router;