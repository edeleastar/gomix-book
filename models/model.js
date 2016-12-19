const uuid = require('uuid');

class Model {
  constructor (details, store) {
    this.details = details;
    if (!this.details.id) {
      this.details.id = uuid();
    }

    this.store = store;
  }
}

module.exports = Model;
