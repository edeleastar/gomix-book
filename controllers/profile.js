'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const Message = require('../models/message');
const datastore = require('../models/datastore');

class PublicProfile extends Controller {

  index(request, response) {
    const profileUser = datastore.findUserById(request.params.id);
    const viewData = {
      title: 'Profile Page',
      user: profileUser,
      messages: profileUser.getMessages(),
    };
    response.render('profile/index', viewData);
  }

  sendMessage(request, response) {
    const currentUser = this.currentUser(request);
    const profileUser = datastore.findUserById(request.params.id);
    const messageText = request.body.messageText;
    const message = new Message(currentUser, profileUser, messageText);
    profileUser.addMessage(message);
    response.redirect('/profile/' + profileUser.id);
  }
}

module.exports = PublicProfile;
