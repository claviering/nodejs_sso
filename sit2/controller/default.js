const debug = require('debug')('sit2:default');
module.exports = {
  default: (req, res) => {
    res.send('welcome sit2');
  },
  dashboard: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.session', req.session)
    res.send('dashboard');
  }
};
