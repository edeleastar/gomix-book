const Blog = require('./blog');
const Model = require('./model.js');
const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');
const glob = require('glob');

class User {
  constructor(details, friends, messages) {
    // super(userObj.email + '.json', { friends: [], messages: [] });

    this.details = details;
    this.friends = friends;
    this.messages = messages;

    //this.db.set('details', this.userDetails).value();

    // this.id = userObj.id;
    // this.firstName = userObj.firstName;
    // this.lastName = userObj.lastName;
    // this.email = userObj.email;
    // this.password = userObj.password;

    // this.friends = [];
    // this.messages = [];
    // this.picture = null;
    // this.blog = new Blog(this);
  }

  static create(details) {
    const user = new User(details);
    const db = low('.data/' + details.email + '.json', {
      storage: fileAsync,
    });
    db.set('details', details).value();
    return user;
  }

  static findByEmail(email) {
    const db = low('.data/' + email + '.json', { storage: fileAsync, });
    const details = db.get('details').value();
    const friends = db.get('friends').value();
    const messages = db.get('messages').value();
    return new User(details, friends, messages);
  }

  static findAll() {
    const users = [];
    const userFiles = glob.sync('.data/*.json');
    userFiles.forEach(userFile => {
      const db = low(userFile, { storage: fileAsync, });
      const details = db.get('details').value();
      const friends = db.get('friends').value();
      const messages = db.get('messages').value();
      users.push(new User(details, friends, messages));
    });
    return users;
  }

  addFriend(user) {
    this.friends.push(user);
  }

  getFriends() {
    return this.friends;
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
