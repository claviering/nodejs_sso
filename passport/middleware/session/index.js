
const session = require('express-session');
const config = require('../../env');
const { store } = require('../redis');

//  express-session v1.5.0 开始 不再需要 cookie-parser 中间件
module.exports = session({
  name: config.session.sessionID,
  secret: config.session.secret,
  resave: config.session.resave,
  saveUninitialized: config.session.saveUninitialized,
  cookie: config.cookie,
  // store
})
