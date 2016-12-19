'use strict';
const Controller = require('./controller');
const User = require('../models/user');
const Post = require('../models/post');

class BlogController extends Controller {

  index(request, response) {
    const loggedInUser = this.currentUser(request);
    const viewData = {
      title: 'Blog',
      user: loggedInUser,
      posts: loggedInUser.getPosts(),
    };
    response.render('blog', viewData);
  }

  createPost(request, response) {
    const currentUser = this.currentUser(request);
    const post = new Post(request.body.title, request.body.content);
    currentUser.addPost(post);
    response.redirect('/blog');
  }
}

module.exports = BlogController;
