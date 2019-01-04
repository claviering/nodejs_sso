const debug = require('debug')('sso:validLogin');

module.exports = async (req, res, next) => {
  debug('valid login')
  if (req.session.isLogin) {
    await next();
  } else {
    res.status(401);
    res.redirect('http://sso.example.com:7000/users/login');
  }
};
