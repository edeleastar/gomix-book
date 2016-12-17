'use strict';
const User = require('../models/user');
const datastore = require('../models/datastore');

class Accounts {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('accounts/index', viewData);
  }

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('accounts/login', viewData);
  }

  logout(request, response) {
    response.cookie('spacebook', '');
    response.redirect('/');
  }

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('accounts/signup', viewData);
  }

  register(request, response) {
    const user = new User(request.body);
    datastore.addUser(user);
    response.redirect('/');
  }

  authenticate(request, response) {
    const user = datastore.findUser(request.body.email);
    if (user) {
      response.cookie('spacebook', user.email);
      response.redirect('/home');
    } else {
      response.redirect('/login');
    }
  }
}

module.exports = new Accounts();
