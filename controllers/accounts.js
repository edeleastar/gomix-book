'use strict';
const userstore = require('../models/userstore');
const logger = require('../utils/logger');

const accounts = {

  index(request, response) {
    const viewData = {
      title: 'Login or Signup',
    };
    response.render('index', viewData);
  },

  login(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('login', viewData);
  },

  logout(request, response) {
    response.cookie('spacebook', '');
    response.redirect('/');
  },

  signup(request, response) {
    const viewData = {
      title: 'Login to the Service',
    };
    response.render('signup', viewData);
  },

  register(request, response) {
    const user = request.body;
    userstore.add(user);
    logger.info(`registering ${user.email}`);
    response.redirect('/');
  },

  authenticate(request, response) {
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

module.exports = accounts;
