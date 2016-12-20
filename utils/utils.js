const userstore = require('../models/userstore');

module.exports.currentUser = function (request) {
  const userEmail = request.cookies.spacebook;
  return userstore.findByEmail(userEmail);
}
