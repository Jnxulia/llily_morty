const client = require('../../shared/db_config').clientDB


function index(req, res) {
        res.json({data : "test_service"})
}
function __getUser(username) {
    return client.getAsync(`user:${username}` )
}
async function get (req, res) {
    client.keys('user*', function (err, keys) {
        if (err) return res.status(401).send(err)
        const users = keys
                    .map((user) =>({user : user.split(":")[1]})
                    );
        return res.json(users)
    });
}
async function   post(req, res){
    let { username , password , repeat_password} = req.body;
    let user = await __getUser(username);
    if (!password  || password != repeat_password ){
        return res.status(400).send({
            message: 'Password and Repeat Password are diferents', 
            status : false
          });

    }
    if(typeof(user) === "boolean" || !user ){
        await client.setAsync(`user:${username}` , password);
        return res.status(201).send();
    }else{
        return res.status(400).send({
            message: 'Username already exists', 
            status : false
          });
    }



 
  }
module.exports = {index, get, post,  __getUser}
