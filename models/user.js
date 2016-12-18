const Blog = require('./blog');

class User {
  constructor(userObj) {
    this.id = userObj.id;
    this.firstName = userObj.firstName;
    this.lastName = userObj.lastName;
    this.email = userObj.email;
    this.password = userObj.password;

    this.friends = [];
    this.messages = [];
    this.picture = null;
    this.blog = new Blog(this);
  }

  addFriend(user) {
    this.friends.push(user);
  }

  addPicture(picture) {
    this.picture = picture;
  }

  getPicture(picture) {
    return this.picture;
  }

  getBlog() {
    return this.blog;
  }

  removeFriend(user) {
    this.friends = this.friends.filter(function (friend) {
      return friend.email !== user.email;
    });
  }

  addMessage(message) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  toString() {
    return this.firstName + ' ' + this.lastName + ' ' + this.email;
  }
}

module.exports = User;
