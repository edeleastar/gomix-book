const userstore = require('../models/userstore');

class Controller {
  currentUser(request) {
    const userEmail = request.cookies.spacebook;
    return userstore.findByEmail(userEmail);
  }
}

module.exports = Controller;
