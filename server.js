const express = require('express');
const routes = require('./routes');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
