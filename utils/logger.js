const winston = require('winston');
var env = require('node-env-file');

const logger = new (winston.Logger)({
  transports: [new (winston.transports.Console)({ json: true })],
});

module.exports = logger;
