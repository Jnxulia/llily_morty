const express = require('express');
const router = express.Router();
const service= require('../services/users.service');
const auth =require('../services/auth.service');    

router.post('/', service.post);
router.get('/', auth.verifyJWT  , service.get);

module.exports = router;
