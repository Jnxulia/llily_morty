const bluebird = require ('bluebird')
const redis   = require("redis");


const session = require('express-session');
const redisStore =  require('connect-redis')(session)
bluebird.promisifyAll(redis);

const dbConfig = {
    host : process.env.REDIS_HOST     || "localhost", 
    port : process.env.REDIS_PORT     || "6379", 
    secret : process.env.REDIS_SECRET || "MANTEQUILLA"
}


const clientDB  = redis.createClient({host:dbConfig.host , 
                                    port : dbConfig.port});
const sessionStorage = {
    secret: dbConfig.secret, 
    store: new redisStore({ 
      host:dbConfig.host, 
      port: dbConfig.port, 
      client: clientDB,
      ttl :  260}),
    saveUninitialized: false,
    resave: false
  }
module.exports = {clientDB, dbConfig , sessionStorage}