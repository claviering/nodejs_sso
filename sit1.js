const app = require('express')();
const debug = require('debug')('sit2:app');
const router = require('./sit1/router');
const middleware = require('./sit1/middleware');
const config = require('./sit1/env');

middleware(app);
router(app)
app.listen(config.port, debug(`Server started on http://${config.url}:${config.port}`));