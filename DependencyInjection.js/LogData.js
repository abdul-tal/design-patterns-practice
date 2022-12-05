class LogData {
    config(logger) {
        this.logger = logger;
    }

    logActivityData() {
        this.logger.write('Activity Log-1');
        this.logger.write('Activity Log-2');
        this.logger.write('Activity Log-3');
    }
}

module.exports = new LogData();
