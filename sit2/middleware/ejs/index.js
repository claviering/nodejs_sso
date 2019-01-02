const expressLayouts = require('express-ejs-layouts');

module.exports = (app) => {
  app.use(expressLayouts);
  app.set('views', './sit2/views');
  app.set('view engine', 'ejs');
};