const express = require('express');
const ejs = require('./ejs');
const session = require('./session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')

module.exports = (app) => {
  // 静态资源
  app.use(express.static('public'))
  // cookies 解析
  app.use(cookieParser())
  // body 解析
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }));
  // 模板引擎
  ejs(app)
  // session 中间件
  app.use(session)

};
