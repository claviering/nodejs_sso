
const session = require('express-session');
const config = require('../../env');

module.exports = session({
  name: config.session.sessionID,
  secret: config.session.secret,
  resave: config.session.resave,
  saveUninitialized: config.session.saveUninitialized,
  cookie: config.cookie,
})
