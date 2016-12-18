'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const datastore = require('../models/datastore');

class Members extends Controller {

  index(request, response) {
    const viewData = {
      title: 'Spacebook Members',
      user:  this.currentUser(request),
      users: datastore.getUsers(),
    };
    response.render('members', viewData);
  }

  follow(request, response) {
    const currentUser = this.currentUser(request);
    const user = datastore.findUserById(request.params.id);
    currentUser.addFriend(user);
    response.redirect('/home');
  }
}

module.exports = Members;
