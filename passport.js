const app = require('express')();
const debug = require('debug')('passport:app');
const router = require('./passport/router');
const middleware = require('./passport/middleware');
const config = require('./passport/env');

middleware(app);
router(app)
app.listen(config.port, debug(`Server started on http://${config.hosts}:${config.port}`));
