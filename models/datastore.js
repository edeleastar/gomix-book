const userData = require('./users.json');
const User = require('./user');
// const NedbDataStore = require('nedb');

class Datastore {
  constructor() {
    // this.db = new NedbDataStore({ filename: '.data/datafile', autoload: true });
    this.users = [];

    for (let userObj of userData) {
      const user = new User(userObj);
      this.addUser(user);
    }
  }

  addUser(user) {
    // this.db.insert(user, function (err, usersAdded) {
    //   if (err) console.log('Theres a problem with the database: ', err);
    //   else if (usersAdded) console.log('Default users inserted in the database');
    // });

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
