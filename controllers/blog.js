'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const datastore = require('../models/datastore');
const Post = require('../models/post');

class BlogController extends Controller {

  index(request, response) {
    const loggedInUser = this.currentUser(request);
    const viewData = {
      title: 'Blog',
      user: loggedInUser,
      posts: loggedInUser.getBlog().getPosts(),
    };
    response.render('blog', viewData);
  }

  createPost(request, response) {
    const currentUser = this.currentUser(request);
    const blog = currentUser.getBlog();
    const post = new Post(request.body.title, request.body.content);
    blog.addPost(post);
    response.redirect('/blog');
  }
}

module.exports = BlogController;
