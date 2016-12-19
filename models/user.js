const _ = require('lodash');
const Model = require('./model.js');

class User {
  constructor(userData) {
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.email = userData.email;
    this.password = userData.password;
  }

  addPicture(picture) {
    this.picture = picture;
  }

  getPicture(picture) {
    return this.picture;
  }

  toString() {
    return this.firstName + ' ' + this.lastName + ' ' + this.email;
  }
}

module.exports = User;
