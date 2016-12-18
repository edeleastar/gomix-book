var express = require('express');
var router = express.Router();
const Accounts = require('./controllers/accounts');
const Home = require('./controllers/home');
const Members = require('./controllers/members');
const Profile = require('./controllers/profile');

router.get('/', Accounts.index);
router.get('/login', Accounts.login);
router.get('/signup', Accounts.signup);
router.get('/logout', Accounts.logout);
router.post('/register', Accounts.register);
router.post('/authenticate', Accounts.authenticate);

const home = new Home();
router.get('/home', home.index.bind(home));
router.get('/home/drop/:id', home.drop.bind(home));
router.get('/home/getpicture/:id', home.getPicture.bind(home));
router.post('/home/uploadpicture', home.uploadPicture.bind(home));

const members = new Members();
router.get('/members', members.index.bind(members));
router.get('/members/follow/:id',  members.follow.bind(members));

const profile = new Profile();
router.get('/profile/:id', profile.index.bind(profile));
router.post('/profile/:id/sendmessage', profile.sendMessage.bind(profile));

module.exports = router;
