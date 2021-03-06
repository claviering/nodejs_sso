const router = require('express').Router();
const defaultCtrl = require('../controller/default.js');
const middleware = require('../middleware/authority');

router.get('/', middleware.authToken, defaultCtrl.default);
router.get('/dashboard', middleware.authToken, defaultCtrl.dashboard);
router.post('/checkToken', defaultCtrl.checkToken);

module.exports = router