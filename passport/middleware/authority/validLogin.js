const debug = require('debug')('passport:validLogin');
const { client } = require('../redis');

module.exports = (req, res, next) => {
  try {
    let token = req.cookies.token
    client.get(token, (err, reply) => {
      debug('reply', reply)
      req.session.isLogin = JSON.parse(reply).isLogin
      next();
    })

    // if (req.session.hasOwnProperty('isLogin') && req.session.isLogin) {
    //   return
    // }
    // let redisKey = 'ses' + req.cookies.sessionID.split('.')[0]
    // client.get(redisKey, async (err, reply) => {
    //   req.session.isLogin = req.session.hasOwnProperty('isLogin') ? reply.isLogin : false
    //   if (!req.session.isLogin) {
    //     res.redirect('http://passport.example.com:9000');
    //     return
    //   }
    //   await next();
    // })
  } catch (err) {
    res.send(err)
  }
};
