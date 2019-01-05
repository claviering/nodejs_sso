const debug = require('debug')('passport:default');
module.exports = {
  default: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.session', req.session)
    req.session.isLogin ? res.render('home') : res.render('welcome');
  },
  dashboard: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.session', req.session)
    res.render('dashboard');
  }
};
