const datastore = require('../models/datastore');
const User = require('../models/user');

class Controller {
  currentUser(request) {
    const userEmail = request.cookies.spacebook;
    return datastore.findUserByEmail(userEmail);
  }
}

module.exports = Controller;
