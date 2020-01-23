const service = require('../services/character.service');
const express = require('express');
const router = express.Router();
const auth =require('../services/auth.service');

router.get('/index',    service.index);
router.get('/',auth.verifyJWT  , service.get);

module.exports = router;