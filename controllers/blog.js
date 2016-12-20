'use strict';
const Controller = require('./controller');
const blogstore = require('../models/blogstore');

class BlogController extends Controller {

  index(request, response) {
    const loggedInUser = this.currentUser(request);
    const userBlog = blogstore.getBlog(loggedInUser.id);
    const viewData = {
      title: 'Blog',
      user: loggedInUser,
      posts: blogstore.getPosts(loggedInUser.id),
    };
    response.render('blog', viewData);
  }

  createPost(request, response) {
    const loggedInUser = this.currentUser(request);
    const post = {
      title: request.body.title,
      content: request.body.content,
    };
    blogstore.addPost(loggedInUser.id, post);
    response.redirect('/blog');
  }
}

module.exports = BlogController;
