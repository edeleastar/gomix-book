'use strict';
const Controller = require('./controller');
const userstore = require('../models/userstore');
const messagestore = require('../models/messagestore');
const friendstore = require('../models/friendstore');
const _ = require('lodash');

class Home extends Controller {

  index(request, response) {
    const loggedInUser = this.currentUser(request);
    const viewData = {
      title: 'Spacebook Home',
      user: loggedInUser,
      friends: friendstore.getFriends(loggedInUser.id),
      messages: messagestore.getMessages(loggedInUser.id),
    };
    response.render('home', viewData);
  }

  drop(request, response) {
    const loggedInUser = this.currentUser(request);
    const friend = userstore.findById(request.params.id);
    //loggedInUser.unfriend(friend);
    //userstore.save();
    friendstore.unfriend(loggedInUser.id, friend.id);
    response.redirect('/home');
  }

  uploadPicture(request, response) {
    const picture  = request.files.picture;
    const currentUser = this.currentUser(request);
    currentUser.addPicture(picture);
    response.redirect('/home');
  }

  getPicture(request, response) {
    const user = userstore.findById(request.params.id);
    const picture = user.getPicture();
    if (picture != null) {
      response.writeHead(200, {
        'Content-Type': picture.mimetype,
        'Content-Length': picture.data.length,
      });
      response.end(new Buffer(picture.data, 'binary'));
    } else {
      response.end();
    }
  }
}

module.exports = Home;
