module.exports = {
  app: {
    title: 'sso',
    description: 'single sign on app',
    keywords: 'sso'
  },
  url: '127.0.0.1',
  port: 7000,
  db: {
    url: 'mongodb://127.0.0.1:27017/test',
    model: 'users',  // 数据库表名
  },
  cookieSecret: 'cat',
  session: {
    sessionID: 'sessionID',
    resave: false,
    saveUninitialized: true
  },
  cookie: {
    maxAge: 24 * (60 * 60 * 1000),
    httpOnly: true,
    resave: true,
    secure: false
  },
  redis: {
    host: '127.0.0.1',
    port: '6379',
    ttl: 10,  // redis 数据过期时间 秒
  },
};
