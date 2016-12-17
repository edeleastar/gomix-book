'use strict';
const User = require('../models/user');
const datastore = require('../models/datastore');

class Home {

  index(request, response) {
    const userEmail = request.cookies.spacebook;
    const user = datastore.findUser(userEmail);
    const viewData = {
      title: 'Spacebook Home',
      user: user,
    };
    response.render('home/index', viewData);
  }
}

module.exports = new Home();
