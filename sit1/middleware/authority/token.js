const debug = require('debug')('sit1:token');
const { client } = require('../redis');

module.exports = async (req) => {
  if (req.session.isLogin) {
    return true
  } else {
    debug('req.cookies.sessionID', req.cookies.sessionID)
    await client.get('ses' + req.cookies.sessionID, function (err, reply) {
      debug('err', err);
      debug('reply', reply);
      return reply ? true : false
    })
  }
};