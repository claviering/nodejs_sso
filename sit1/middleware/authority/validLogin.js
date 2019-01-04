const debug = require('debug')('sit1:validLogin');
const token = require('./token');

module.exports = async (req, res, next) => {
  debug('valid login')
  debug('req.cookies', req.cookies)
  debug('req.session', req.session)
  if (req.session.isLogin) {
    await next();
  } else {
    await token(req)
    res.status(401);
    res.send('no login');
  }
};
