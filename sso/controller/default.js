const debug = require('debug')('sso:default');
module.exports = {
  default: (req, res) => {
    res.render('welcome');
  },
  dashboard: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.session', req.session)
    res.render('dashboard');
  }
};
