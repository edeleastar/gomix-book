'use strict';
const utils = require ('../utils/utils');
const userstore = require('../models/userstore');
const friendstore = require('../models/friendstore');

const members = {

  index(request, response) {
    const loggedInUser = utils.currentUser(request);
    const viewData = {
      title: 'Spacebook Members',
      user: loggedInUser,
      members: userstore.findAll(),
    };
    response.render('members', viewData);
  },

  follow(request, response) {
    const loggedInUser = utils.currentUser(request);
    const friend = userstore.findById(request.params.id);
    //const friendship = new Friendship(currentUser, friend);
    const friendship = {
      src: loggedInUser.id,
      target: friend.id,
    };
    friendstore.add(friendship);
    response.redirect('/home');
  }
}

module.exports = members;
