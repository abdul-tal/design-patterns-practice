const Phone = require('./Phone');

class Iphone12 extends Phone {
    constructor(serialNumber) {
        super(serialNumber, 'Iphone12', 'Snapdragon 800', '6 GB', 20, 10, 40, '1200 x 2400')
    }

    dial(num) {
        console.log(`Dialing ${num} from Iphone-12`)
    }
}

module.exports = Iphone12;