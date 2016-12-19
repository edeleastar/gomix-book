'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const Message = require('../models/message');
const userstore = require('../models/userstore');
const messagestore = require('../models/messagestore');

class PublicProfile extends Controller {

  index(request, response) {
    const profileUser = userstore.findById(request.params.id);
    const viewData = {
      title: 'Profile Page',
      user: profileUser,
      messages: messagestore.getMessages(profileUser.id),
    };
    response.render('profile', viewData);
  }

  sendMessage(request, response) {
    const currentUser = this.currentUser(request);
    const profileUser = userstore.findById(request.params.id);
    const messageText = request.body.messageText;
    const message = new Message(currentUser, profileUser, messageText);
    messagestore.add(message);
    response.redirect('/profile/' + profileUser.id);
  }
}

module.exports = PublicProfile;
