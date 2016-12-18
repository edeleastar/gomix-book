'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const datastore = require('../models/datastore');

class Home extends Controller {

  index(request, response) {
    const loggedInUser = this.currentUser(request);
    const viewData = {
      title: 'Spacebook Home',
      user: loggedInUser,
      friends: loggedInUser.getFriends(),
      messages: loggedInUser.getMessages(),
    };
    response.render('home', viewData);
  }

  drop(request, response) {
    const currentUser = this.currentUser(request);
    const user = datastore.findUserById(request.params.id);
    currentUser.removeFriend(user);
    response.redirect('/home');
  }

  uploadPicture(request, response) {
    const picture  = request.files.picture;
    const currentUser = this.currentUser(request);
    currentUser.addPicture(picture);
    response.redirect('/home');
  }

  getPicture(request, response) {
    const user = datastore.findUserById(request.params.id);
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
