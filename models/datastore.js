const userData = require('./users.json');
const User = require('./user');

class Datastore {
  constructor() {
    this.users = [];

    for (let userObj of userData) {
      const user = new User(userObj);
      this.users.push(user);
    }
  }

  addUser(user) {
    this.users.push(user);
    console.log('new user added ' + user.toString());
  }

  findUserByEmail(email) {
    let foundUser = null;
    for (let user of this.users) {
      if (user.email === email) {
        foundUser = user;
      }
    }

    return foundUser;
  }

  findUserById(id) {
    let foundUser = null;
    for (let user of this.users) {
      if (user.id === id) {
        foundUser = user;
      }
    }

    return foundUser;
  }

  getUsers() {
    return this.users;
  }
}

module.exports = new Datastore();
