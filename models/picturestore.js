const Store = require('./store');

class PictureStore {
  constructor() {
    this.pictures = new Map();
  }

  getPicture(id) {
    return this.pictures.get(id);
  }

  addPicture(id, image) {
    this.pictures.set(id, image);
  }
}

module.exports = new PictureStore();
