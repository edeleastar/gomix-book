const Store = require('./store');

class MessageStore {
  constructor() {
    this.store = new Store('.data/messages.json', 'messages', { messages: [] });
  }

  getMessages(id) {
    return this.store.findBy({ toId: id });
  }

  add(message) {
    this.store.add(message);
  }

  drop() {
    this.store.drop();
  }
}

module.exports = new MessageStore();
