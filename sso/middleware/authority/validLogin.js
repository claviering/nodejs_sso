const debug = require('debug')('sso:validLogin');

module.exports = async (req, res, next) => {
  if (req.session) {
    debug(req.session)
    await next();
  } else {
    res.sendStatus(401); 
  }
};
