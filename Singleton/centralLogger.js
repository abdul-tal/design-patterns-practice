class CentralLogger {
    constructor() {
        this.logs = [];
    }

    log(msg) {
        this.logs.push(msg);
        console.log('CENTRAL LOGGER: ', msg);
    }

    printLogCount() {
        console.log('Logs Count:', this.logs.length);
    }
}

module.exports = CentralLogger;


















// if(CentralLogger.instance == null){
//     this.logs = [];
//     CentralLogger.instance = this;
// }
// return CentralLogger.instance;