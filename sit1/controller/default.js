const debug = require('debug')('sit1:default');
module.exports = {
  default: (req, res) => {
    res.send('sit1 home');
  },
  dashboard: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.session', req.session)
    res.send('sit1 dashboard');
  }
};
