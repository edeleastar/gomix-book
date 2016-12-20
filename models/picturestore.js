const Store = require('./store');
const fs = require ('fs');

class PictureStore {
  constructor() {
    this.pictures = new Map();
    if (!fs.existsSync('.data/pictures/')){
      fs.mkdirSync('.data/pictures/');
    }
  }

  getPicture(id, name) {
    let path = __dirname.split('/');
    path.pop();
    path = path.join('/');
    const absPath = path + '/.data/pictures/' + id + '/' + name;
    return absPath;
  }

  addPicture(id, imageFile) {
    if (!fs.existsSync('.data/pictures/' + id)){
      fs.mkdirSync('.data/pictures/' + id);
    }
    this.pictures.set(id, imageFile);

    imageFile.mv('.data/pictures/' + id + '/' + imageFile.name, function (err) {
      if (err) {
        console.log('error saving picture')
      }
    });
  }
}

module.exports = new PictureStore();
