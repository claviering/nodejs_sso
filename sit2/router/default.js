const router = require('express').Router();
const defaultCtrl = require('../controller/default.js');
const middleware = require('../middleware/authority');

router.get('/', defaultCtrl.default);
// router.get('/dashboard', middleware.validLogin, defaultCtrl.dashboard);

module.exports = router