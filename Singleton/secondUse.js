const CentralLogger = require('./centralLogger');
const logger  = new CentralLogger();


function logSecondImp() {
    logger.printLogCount();
    logger.log('Second File');
    logger.printLogCount();
}

module.exports = logSecondImp;

