const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var exphbs    = require('express-handlebars');
const routes  = require('./routes');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
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
