var express = require('express');
var router = express.Router();
const accounts = require('./controllers/accounts');
const home = require('./controllers/home');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/home', home.index);

module.exports = router;
