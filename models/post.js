class Post {
  constructor (title, content) {
    this.title = title;
    this.content = content;
  }

  toString() {
    return this.title + ' ' + this.content;
  }
}

module.exports = Post;
