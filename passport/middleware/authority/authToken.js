const debug = require('debug')('passport:authToken');

module.exports = (req, res, next) => {
  debug('req.session', req.session)
  const authorization = req.session.isLogin ? req.session.isLogin : false;
  authorization ? next() : res.status(401).render('welcome')
}