const axios = require('axios');
const api = require('../../api');
const debug = require('debug')('sit1:authToken');

module.exports = async (req, res, next) => {
  const authorization = req.session.isLogin ? req.session.isLogin : false;
  if (authorization) {
    next()
    return
  }
  try {
    let result = await axios.post(api.passport.hosts + api.passport.router, {token: req.cookies.token})
    if (result.data.isLogin) {
      req.session.isLogin = true;
      next();
      return
    }
    res.redirect('http://passport.example.com:9000/users/login')
  } catch (err) {
    res.send(err)
  }
}