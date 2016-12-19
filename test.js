const Store = require('./models/store');

userStore = new Store('.data/users3.json', 'users', { users: [] });
messageStore = new Store('.data/msg.json', 'messages', { messages: [] });

const user1 = {
  id: '1',
  firstName: 'simon',
  lastName: 'simpson',
};

const user2 = {
  id: '2',
  firstName: 'james',
  lastName: 'simpson',
};

const msg1 = {
  id: '1',
  from: 'simon',
  messageText: 'howdy',
};

const msg2 = {
  id: '2',
  from: 'james',
  messageText: 'hi again',
};

//userStore.add(user1);
//userStore.add(user2);

messageStore.add(msg1);
messageStore.add(msg2);

const obj = userStore.findBy({ id: '2' });
console.log(obj);
