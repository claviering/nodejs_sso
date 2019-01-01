
const session = require('express-session');
const config = require('../../env');
const { redisInstance } = require('../redis');

//  express-session v1.5.0 开始 不再需要 cookie-parser 中间件
module.exports = session({
  secret: config.cookieSecret,
  resave: false,
  saveUninitialized: true,
  cookie: config.cookie,
  store: redisInstance
})
