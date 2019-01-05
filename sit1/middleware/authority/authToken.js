const axios = require('axios');
const api = require('../../api');
const debug = require('debug')('sit1:authToken');

module.exports = async (req, res, next) => {
  debug('req.session', req.session)
  const authorization = req.session.isLogin ? req.session.isLogin : false;
  debug('authorization', authorization)
  if (authorization) {
    next()
    return
  }
  debug('token', req.cookies.token)
  try {
    let url = api.passport.hosts + api.passport.router
    debug('url', url)
    let result = await axios.post(url, {token: req.cookies.token})
    debug('result.data', result.data)
    result.data.isLogin ? next() : res.send('no login')
  } catch (err) {
    res.send(err)
  }
}