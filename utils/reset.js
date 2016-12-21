'use strict';

const sh = require('shelljs');
const seed = require('./users.json');
const userstore = require('../models/userstore');
const messagestore = require('../models/messagestore');
const friendstore = require('../models/friendstore');
const blogstore = require('../models/blogstore');

class Reset {

  index(request, response) {
    const viewData = {
      title: 'Admin',
      dataFiles: sh.find('.data'),
    };
    response.render('admin/reset', viewData);
  }

  removeAll(request, response) {
    sh.rm('-rf', '.data/pictures/*');
    userstore.drop();
    messagestore.drop();
    friendstore.drop();
    blogstore.drop();
    seed.users.forEach(user => {
      userstore.add(user);
    });
    response.redirect('/logout');
  }
}

module.exports = Reset;