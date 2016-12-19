class Message {
  constructor (from, to, messageText) {
    this.from = from.details.firstName;
    this.messageText = messageText;
  }

  toString() {
    return this.from.toString + ' ' + this.to.toString() + ' ' + this.message;
  }
}

module.exports = Message;
