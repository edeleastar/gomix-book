const datastore = require('../models/datastore');

class Controller {
  currentUser(request) {
    const userEmail = request.cookies.spacebook;
    return datastore.findUserByEmail(userEmail);
  }
}

module.exports = Controller;
