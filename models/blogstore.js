const Store = require('./store');

class BlogStore {
  constructor() {
    this.store = new Store('.data/blogs.json', 'blogs', {blogs: []});
  }

  getBlog(id) {
    let blog = this.store.findOneBy({id: id});
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
    this.store.add(blog);
  }

  addPost (id, post) {
    const blog = this.getBlog(id);
    blog.posts.push(post);
  }

  getPosts (id) {
    const blog = this.getBlog(id);
    return blog.posts;
  }
}

module.exports = new BlogStore();
