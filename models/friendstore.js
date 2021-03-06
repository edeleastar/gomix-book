const Store = require('./store');
const userstore = require('../models/userstore');

class FriendStore {
  constructor() {
    this.store = new Store('.data/friends.json', 'friends', { friends: [] });
  }

  getFriends(id) {
    const friendships = this.store.findBy({ src: id });
    const friends = [];
    friendships.forEach(friendShip => {
      friends.push(userstore.findById(friendShip.target));
    });
    return friends;
  }

  add(friendship) {
    this.store.add(friendship);
  }

  unfriend(src, target) {
    this.store.remove({ src: src, target: target });
  }

  drop() {
    this.store.drop();
  }
}

module.exports = new FriendStore();
