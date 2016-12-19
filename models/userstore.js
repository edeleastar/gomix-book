const Store = require('./store');
const User = require('./user');
const _ = require('lodash');
const uuid = require('uuid');

class UserStore {
  constructor() {
    this.store = new Store('.data/users.json', 'users', { users: [] });
  }

  findById(id) {
    return this.store.findOneBy({ id: id });
  }

  findByEmail(email) {
    return this.store.findOneBy({ email: email });
  }

  findByIds(ids) {
    const users = [];
    ids.forEach(id => {
      users.push(this.findById(id));
    });
    return users;
  }

  findAll() {
    return this.store.findAll();
  }

  add(user) {
    user.id = uuid();
    this.store.add(user);
  }
}

module.exports = new UserStore();
