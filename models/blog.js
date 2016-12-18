const low = require('lowdb');
const fileAsync = require('lowdb/lib/file-async');

class Blog {
  constructor (user) {
    this.user = user;
    const dbFile = user.email + '-blog.json';
    this.db = low('.data/' + dbFile, {
      storage: fileAsync,
    });
    this.db.defaults({ posts: [] }).value();
    this.posts = this.db.get('posts');
    //this.posts = [];
  }

  getPosts() {
    return this.db.get('posts').value();
    //return this.posts;
  }

  addPost(post) {
    this.posts.push(post).last().value();
    //this.posts.push(post);
  }
}

module.exports = Blog;
