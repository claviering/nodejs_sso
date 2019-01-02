const ejs = require('./ejs');
const mongo = require('./mongo');
const session = require('./session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const passport = require('./passport');
const flash = require('./flash');
module.exports = (app) => {
  // cookies 解析
  app.use(cookieParser())
  // body 解析
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));
  // 模板引擎
  ejs(app)
  // 连接 mongodb
  mongo()
  // session 中间件
  app.use(session)
  // passport 中间件
  passport(app)
  // flash 中间件
  flash(app)
};
