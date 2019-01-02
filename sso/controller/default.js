const debug = require('debug')('sso:default');
module.exports = {
  default: (req, res) => {
    res.send('sso page');
  },
  dashboard: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.cookies.SID', req.cookies.SID)
    debug('req.session', req.session)
    res.send('dashboard page');
  }
};
