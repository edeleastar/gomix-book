class User {
  constructor(userObj) {
    this.firstName = userObj.firstName;
    this.lastName = userObj.lastName;
    this.email = userObj.email;
    this.password = userObj.password;
  }

  toString() {
    return this.firstName + ' ' + this.lastName + ' ' + this.email;
  }
}

module.exports = User;
