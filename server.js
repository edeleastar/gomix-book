const express = require('express');
var exphbs    = require('express-handlebars');
const routes  = require('./routes');

const app = express();
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
