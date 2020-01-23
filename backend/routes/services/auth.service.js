const JWT = require('jsonwebtoken');
const authJWT = require('../../environment.json').JWT;
const users = require('../services/users.service');
function index(req, res) {
        res.json({data : "test_service"})
};
async function login (req, res) {
    let {username, password}  = req.body;
    passwordDB = await users.__getUser(username)
    if (passwordDB && password == passwordDB) {
        res.status(200).json({
            username: username,
            jwt: JWT.sign({username}, authJWT.secretKey, authJWT.detail)
        });
    }
    res.status(401)
        .json({message: 'Login Failed'});
}
function logout(req, res) {
    
};
function verifyJWT(req, res, next) {

    JWT.verify(req.headers.jwt, authJWT.secretKey, 
        (err) =>{  
            if (err)
                return res.status(401)
                          .send({ auth: false, message: 'Invalid Token' });
        next();
    });
  };
module.exports = {index, login, logout , verifyJWT}
