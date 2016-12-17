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
      messages: loggedInUser.getMessages(),
    };
    response.render('home/index', viewData);
  }

  drop(request, response) {
    const currentUser = this.currentUser(request);
    const user = datastore.findUserById(request.params.id);
    currentUser.removeFriend(user);
    response.redirect('/home');
  }
}

module.exports = Home;
