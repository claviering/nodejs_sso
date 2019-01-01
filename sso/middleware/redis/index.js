const config = require('../../env')
const redis = require('redis');
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const debug = require('debug')('sso:redis');
const client = redis.createClient(config.redis.port, config.redis.host);
client.on('ready', () => {
    debug('redis online');
});
client.on('connect', () => {
    debug(`connect redis ${config.redis.host + ':' + config.redis.port} success`);
})
client.on('error', (err) => {
    debug('err', err);
})
// 数据库密码
// client.auth(config.redis.pass, () => {
//     debug('auth redis success');
// });

const redisInstance = new RedisStore({
    client
});

module.exports = {
    redisInstance,
    client
};