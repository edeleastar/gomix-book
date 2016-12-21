const express = require('express');
const router = express.Router();

const accounts = require('./controllers/accounts');
const home = require('./controllers/home');
const members = require('./controllers/members');
const profile = require('./controllers/profile');
const blogController = require('./controllers/blog');
const reset = require('./utils/reset');

router.get('/', accounts.index);
router.get('/login', accounts.login);
router.get('/signup', accounts.signup);
router.get('/logout', accounts.logout);
router.post('/register', accounts.register);
router.post('/authenticate', accounts.authenticate);

router.get('/home', home.index);
router.get('/home/drop/:id', home.drop);
router.get('/home/getpicture/:id', home.getPicture);
router.post('/home/uploadpicture', home.uploadPicture);

router.get('/members', members.index);
router.get('/members/follow/:id',  members.follow);

router.get('/profile/:id', profile.index);
router.post('/profile/:id/sendmessage', profile.sendMessage);

router.get('/blog', blogController.index);
router.post('/blog/createpost', blogController.createPost);

router.get('/reset', reset.index);
router.get('/reset/removeall', reset.removeAll);

module.exports = router;
