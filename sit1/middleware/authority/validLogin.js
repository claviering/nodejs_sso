const debug = require('debug')('sit1:validLogin');
const { client } = require('../redis');

module.exports = async (req, res, next) => {
  debug('req.cookies', req.cookies)
  debug('req.session', req.session)
  try {
    if (req.session.hasOwnProperty('isLogin') && req.session.isLogin) {
      await next();
      return
    }
    let redisKey = 'ses' + req.cookies.sessionID.split('.')[0]
    client.get(redisKey, async (err, reply) => {
      req.session.isLogin = req.session.hasOwnProperty('isLogin') ? reply.isLogin : false
      debug('req.session', req.session)
      if (!req.session.isLogin) {
        res.redirect('http://passport.example.com:9000');
        return
      }
      await next();
    })
  } catch (err) {
    res.send(err)
  }
};
