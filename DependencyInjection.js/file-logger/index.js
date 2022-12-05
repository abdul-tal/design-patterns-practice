const fs = require('fs');
const path = require('path');
const logFile = path.join(__dirname, 'activity.log');

const write = (log) => {
    if(log) {
        fs.appendFile(logFile, `${new Date()} : ${log}\n`, err => {
            if(err) {
                return console.log('Error occurred while writing to log file');
            }
        });
    }
};

module.exports = {
    write
};
