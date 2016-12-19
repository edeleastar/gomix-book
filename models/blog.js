const Model = require('./model.js');

class Blog extends Model {
  constructor(user) {
    super(user.email + '-blog.json', { posts: [] });
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
