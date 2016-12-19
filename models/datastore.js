const User = require('./user');
const low = require('lowdb');
const uuid = require('uuid');
const fileAsync = require('lowdb/lib/file-async');

class Datastore {
  constructor() {
    this.users = [];
    this.db = low('.data/db.json', { storage: fileAsync, });
    this.db.defaults({ users: [] }).value();
    this.userCollection = this.db.get('users');
    for (const userDetails of this.userCollection.value()) {
      this.users.push(new User(userDetails, this));
    }
  }

  addUser(userDetails) {
    userDetails.id = uuid();
    userDetails.friends = [];
    userDetails.messages = [];
    userDetails.blog = [];
    this.userCollection.push(userDetails).last().value();
    this.users.push(new User(userDetails, this));
  }

  save() {
    this.db.write();
  }

  findUserByEmail(email) {
    let foundUser = null;
    for (let user of this.users) {
      if (user.details.email === email) {
        foundUser = user;
      }
    }

    return foundUser;
  }

  findUserById(id) {
    let foundUser = null;
    for (let user of this.users) {
      if (user.details.id === id) {
        foundUser = user;
      }
    }

    return foundUser;
  }

  getUsersByIds(ids) {
    const users = [];
    ids.forEach(id => {
      users.push(this.findUserById(id));
    });
    return users;
  }

  getUsers() {
    return this.users;
  }
}

module.exports = new Datastore();
