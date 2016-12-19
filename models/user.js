const Blog = require('./blog');
const Model = require('./model.js');

class User {
  constructor(details, datastore) {
    this.details = details;
    if (!this.details.id) {
      this.details.id = uuid();
    }
    this.datastore = datastore;
  }

  addFriend(user) {
    this.details.friends.push(user.details.id);
    this.datastore.save();
  }

  getFriends() {
    return this.datastore.getUsersByIds(this.details.friends);
  }

  addPicture(picture) {
    this.picture = picture;
  }

  getPicture(picture) {
    return this.picture;
  }

  addPost(post) {
    this.details.blog.push(post);
    this.datastore.save();
  }

  getPosts() {
    return this.details.blog;
  }

  removeFriend(friend) {
    this.details.friends = this.details.friends.filter(function (id) {
      return id !== friend.details.id;
    });

    this.datastore.save();
  }

  addMessage(message) {
    this.details.messages.push(message);
    this.datastore.save();
  }

  getMessages() {
    return this.details.messages;
  }

  toString() {
    return this.firstName + ' ' + this.lastName + ' ' + this.email;
  }
}

module.exports = User;
