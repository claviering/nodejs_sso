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
    let url = api.passport.hosts + api.passport.router
    let result = await axios.post(url, {token: req.cookies.token})
    if (result.data.isLogin) {
      req.session.isLogin = true;
      next();
      return
    }
    res.send('no login')
  } catch (err) {
    res.send(err)
  }
}