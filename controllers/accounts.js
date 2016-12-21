'use strict';
const userstore = require('../models/userstore');
const logger = require('../utils/logger');

class Accounts {

  static index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  }

  static login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  }

  static logout(request, response) {
    response.cookie('spacebook', '');
    response.redirect('/');
  }

  static signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  }

  static register(request, response) {
    const user = request.body;
    userstore.add(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  }

  static authenticate(request, response) {
    const user = userstore.findByEmail(request.body.email);
    if (user) {
      response.cookie('spacebook', user.email);
      logger.info(`logging in ${user.email}`);
      response.redirect('/home');
    } else {
      response.redirect('/login');
    }
  }
}

module.exports = Accounts;
