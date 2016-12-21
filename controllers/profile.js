'use strict';

const utils = require('../utils/utils');
const userstore = require('../models/userstore');
const messagestore = require('../models/messagestore');

const profile = {

  index(request, response) {
    const profileUser = userstore.findById(request.params.id);
    const viewData = {
      title: 'Profile Page',
      user: profileUser,
      messages: messagestore.getMessages(profileUser.id),
    };
    response.render('profile', viewData);
  },

  sendMessage(request, response) {
    const loggedInUser = utils.currentUser(request);
    const profileUser = userstore.findById(request.params.id);
    const message = {
      fromId: loggedInUser.id,
      toId: profileUser.id,
      from: loggedInUser.firstName,
      messageText: request.body.messageText,
    };
    messagestore.add(message);
    response.redirect('/profile/' + profileUser.id);
  }
}

module.exports = profile;
