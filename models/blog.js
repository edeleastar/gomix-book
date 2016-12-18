class Blog {
  constructor (user) {
    this.user = user;
    this.posts = [];
  }

  addPost(post) {
    this.posts.push(post);
  }
}

module.exports = Blog;
