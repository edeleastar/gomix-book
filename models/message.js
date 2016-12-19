class Message {
  constructor (from, to, messageText) {
    this.fromId = from.id;
    this.toId = to.id;
    this.from = from.firstName;
    this.messageText = messageText;
  }

  toString() {
    return this.from.toString + ' ' + this.to.toString() + ' ' + this.message;
  }
}

module.exports = Message;
