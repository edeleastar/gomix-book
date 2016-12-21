const Store = require('./store');
const logger = require('../utils/logger');

class BlogStore {
  constructor() {
    this.store = new Store('.data/blogs.json', 'blogs', { blogs: [] });
  }

  getBlog(id) {
    let blog = this.store.findOneBy({ id: id });
    if (!blog) {
      blog = {
        id: id,
        posts: [],
      };
      this.addBlog(blog);
    }

    return blog;
  }

  addBlog(blog) {
    logger.debug(`adding a new blog`);
    this.store.add(blog);
  }

  addPost(id, post) {
    logger.debug(`adding post for user ${id}`, post);
    const blog = this.getBlog(id);
    blog.posts.push(post);
  }

  getPosts(id) {
    const blog = this.getBlog(id);
    logger.debug(`retrieving post for user ${id}`, blog.posts);
    return blog.posts;
  }

  drop() {
    this.store.drop();
  }
}

module.exports = new BlogStore();
