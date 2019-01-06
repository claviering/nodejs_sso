const debug = require('debug')('sit1:default');

module.exports = {
  default: (req, res) => {
    res.render('sit1Home');
  },
  dashboard: (req, res) => {
    res.render('sit1Dashboard');
  }
};
