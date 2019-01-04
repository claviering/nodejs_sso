module.exports = {
  app: {
    title: 'sit2',
    description: 'single sign on app',
    keywords: 'sit2'
  },
  hosts: '127.0.0.1',
  port: 7002,
  db: {
    hosts: 'mongodb://127.0.0.1:27017/test',
    model: 'users',  // 数据库表名
  },
  session: {
    secret: 'cat',
    sessionID: 'sessionID',
    resave: false,
    saveUninitialized: true
  },
  cookie: {
    maxAge: 24 * (60 * 60 * 1000),
    httpOnly: true,
    domain: 'example.com',
    resave: true,
    secure: false
  },
  redis: {
    hosts: '127.0.0.1',
    port: '6379',
    ttl: 10,  // redis 数据过期时间 秒
  },
};
