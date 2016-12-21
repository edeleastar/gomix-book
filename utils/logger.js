const winston = require('winston');

const logger = new (winston.Logger)({
  transports: [new (winston.transports.Console)({ json: true })],
});

logger.level = 'debug';

if (process.env.logLevel) {
  logger.level = logLevel;
}
module.exports = logger;
