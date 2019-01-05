const router = require('express').Router();
const usersCtrl = require('../controller/users.js');

router.get('/login', usersCtrl.loginPage);
router.get('/register', usersCtrl.registerPage);
router.get('/logout', usersCtrl.logout);
router.post('/login', usersCtrl.login);
router.post('/register', usersCtrl.register);

module.exports = router