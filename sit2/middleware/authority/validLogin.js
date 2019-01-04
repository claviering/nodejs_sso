const debug = require('debug')('sit2:validLogin');

module.exports = async (req, res, next) => {
  debug('valid login')
  if (req.session.isLogin) {
    await next();
  } else {
    res.status(401);
    res.send('no login');
  }
};
