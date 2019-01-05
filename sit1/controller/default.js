const debug = require('debug')('sit1:default');
module.exports = {
  default: (req, res) => {
    res.send('welcome sit1');
  },
  dashboard: (req, res) => {
    debug('req.cookies', req.cookies)
    debug('req.session', req.session)
    res.send('dashboard sit1');
  }
};
