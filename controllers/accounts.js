'use strict';
const User = require('../models/user');
const datastore = require('../models/datastore');

class Accounts {

  static index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('accounts/index', viewData);
  }

  static login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('accounts/login', viewData);
  }

  static logout(request, response) {
    response.cookie('spacebook', '');
    response.redirect('/');
  }

  static signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('accounts/signup', viewData);
  }

  static register(request, response) {
    const user = new User(request.body);
    datastore.addUser(user);
    response.redirect('/');
  }

  static authenticate(request, response) {
    const user = datastore.findUserByEmail(request.body.email);
    if (user) {
      response.cookie('spacebook', user.email);
      response.redirect('/home');
    } else {
      response.redirect('/login');
    }
  }
}

module.exports = Accounts;
