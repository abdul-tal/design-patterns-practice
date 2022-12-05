const Phone = require('./Phone');

class Iphone11 extends Phone {
    constructor(serialNumber) {
        super(serialNumber, 'Iphone11', 'Snapdragon 679', '3 GB', 20, 10, 30, '700 x 1200')
    }

    dial(num) {
        console.log(`Dialing ${num} from Iphone-11`)
    }
}

module.exports = Iphone11;
