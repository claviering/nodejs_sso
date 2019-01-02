const debug = require('debug')('sso:validLogin');

module.exports = async (req, res, next) => {
  debug('valid login')
  if (req.session.isLogin) {
    await next();
  } else {
    res.status(401);
    res.redirect('/users/login');
  }
};
