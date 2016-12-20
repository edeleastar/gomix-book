'use strict';

const utils = require ('../utils/utils');
const userstore = require('../models/userstore');
const messagestore = require('../models/messagestore');
const friendstore = require('../models/friendstore');
const picturestore = require('../models/picturestore');


class Home {
  index(request, response) {
    const loggedInUser = utils.currentUser(request);
    const viewData = {
      title: 'Spacebook Home',
      user: loggedInUser,
      friends: friendstore.getFriends(loggedInUser.id),
      messages: messagestore.getMessages(loggedInUser.id),
    };
    response.render('home', viewData);
  }

  drop(request, response) {
    const loggedInUser = utils.currentUser(request);
    const friend = userstore.findById(request.params.id);
    friendstore.unfriend(loggedInUser.id, friend.id);
    response.redirect('/home');
  }

  uploadPicture(request, response) {
    const loggedInUser = utils.currentUser(request);
    const picture  = request.files.picture;
    loggedInUser.profilePicture = picture.name;
    picturestore.addPicture(loggedInUser.id, picture);
    response.redirect('/home');
  }

  getPicture(request, response) {
    const user = userstore.findById(request.params.id);
    if (user.profilePicture) {
      const picture = picturestore.getPicture(user.id, user.profilePicture);
      response.sendFile(picture);
    }
  }
}

module.exports = Home;
