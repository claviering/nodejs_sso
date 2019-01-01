const router = require('express').Router();
const defaultCtrl = require('../controller/default.js');

router.get('/', defaultCtrl.default);

module.exports = router