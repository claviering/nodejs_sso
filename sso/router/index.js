const defaultRouter = require('./default');
const usersRouter = require('./users');


module.exports = (app) => {
  app.use(defaultRouter)
  app.use('/users', usersRouter)
};

