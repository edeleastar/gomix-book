const low = require('lowdb');
const uuid = require('uuid');
const fileAsync = require('lowdb/lib/file-async');
const _ = require('lodash');

class Store {
  constructor(file, name, defaults) {
    this.name = name;
    this.db = low(file, { storage: fileAsync, });
    this.db.defaults(defaults).value();
    this.objs = this.db.get(name);
    console.log ('Loading ' + name);
    console.log ('------------------');
    for (let o of this.objs) {
      console.log(o);
    }
    console.log ('------------------');
  }

  add(obj) {
    this.objs.push(obj).last().value();
  }

  remove(obj) {
    this.db.get(this.name).remove(obj).value();
  }

  findAll() {
    return this.db.get(this.name).value();
  }

  findByIds(ids) {
    return this.db.get(this.name).keyBy('id').at(ids).value();
  }

  findBy(filter) {
    return this.db.get(this.name).filter(filter).value();
  }

  findOneBy(filter) {
    const results = this.db.get(this.name).filter(filter).value();
    return results[0];
  }

  save() {
    this.db.write();
  }
}

module.exports = Store;
