class Datastore {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    console.log('new user added ' + user.toString());
  }

  findUser(email) {
    let foundUser = null;
    for (let user of this.users) {
      if (user.email === email) {
        foundUser = user;
      }
    }

    return foundUser;
  }
}

module.exports = new Datastore();
