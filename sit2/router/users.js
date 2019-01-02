const router = require('express').Router();
const usersCtrl = require('../controller/users.js');

router.get('/login', usersCtrl.index);
router.post('/login', usersCtrl.login);
router.get('/register', usersCtrl.registerPage);
router.post('/register', usersCtrl.register);
router.get('/logout', usersCtrl.logout);

module.exports = router