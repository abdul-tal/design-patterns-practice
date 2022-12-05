class Phone {
    constructor(serialNumber, model, processor, RAM, width, height, length, resolution) {
        this.serialNumber = serialNumber;
        this.configuration = { serialNumber, model, processor, RAM, width, height, length, resolution };
    }

    dial(num) {
        console.log(`Dialing ${num}....`);
    }

    displayConfig() {
        console.log(this.configuration);
    }
}

module.exports = Phone;
