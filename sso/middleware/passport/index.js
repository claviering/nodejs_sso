const passport = require('passport');
const passportConfig = require('./passport');

module.exports = (app) => {
  passportConfig(passport)
  app.use(passport.initialize());
  app.use(passport.session());
};
