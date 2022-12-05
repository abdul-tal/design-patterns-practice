const CentralLogger = require('./centralLogger');
const logger  = new CentralLogger();


function logFirstImp() {
    logger.printLogCount();
    logger.log('First File');
    logger.printLogCount();
}

module.exports = logFirstImp;
