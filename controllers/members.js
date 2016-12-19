'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const Friendship = require('../models/friendship');
const userstore = require('../models/userstore');
const friendstore = require('../models/friendstore');

class Members extends Controller {

  index(request, response) {
    const loggedInUser = this.currentUser(request);
    const viewData = {
      title: 'Spacebook Members',
      user: loggedInUser,
      members: userstore.findAll(),
    };
    response.render('members', viewData);
  }

  follow(request, response) {
    const currentUser = this.currentUser(request);
    const friend = userstore.findById(request.params.id);
    const friendship = new Friendship(currentUser, friend);
    friendstore.add(friendship);
    response.redirect('/home');
  }
}

module.exports = Members;
