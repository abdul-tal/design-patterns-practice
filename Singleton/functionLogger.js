const logs = [];

module.exports = {
    log: (msg) => {
        logs.push(msg);
        console.log('CENTRAL LOGGER: ', msg);
    },
    printLogCount: () => {
        console.log('Logs Count:', logs.length);
    }
};
