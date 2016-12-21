
const winston = require('winston');
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const logger = require('./utils/logger');

const routes = require('./routes');

const app = express();
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false, }));
app.use(fileUpload());
app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main',
}));
app.set('view engine', '.hbs');

app.use(express.static('public'));
app.use('/', routes);

const listener = app.listen(process.env.PORT || 4000, function () {
  logger.info(`gomix-book started on port ${listener.address().port}`);
});
