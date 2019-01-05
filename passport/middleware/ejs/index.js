const expressLayouts = require('express-ejs-layouts');

module.exports = (app) => {
  app.use(expressLayouts);
  app.set('views', './passport/views');
  app.set('view engine', 'ejs');
};