const app = require('express')();
const debug = require('debug')('sit2:app');
const router = require('./sit2/router');
const middleware = require('./sit2/middleware');
const config = require('./sit2/env');

middleware(app);
router(app)
app.listen(config.port, debug(`Server started on http://${config.hosts}:${config.port}`));