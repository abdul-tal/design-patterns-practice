const Iphone11 = require('./Iphone11');
const Iphone12 = require('./Iphone12');

class IphoneFactory {
    create(modelName, serialNumber) {
        switch(modelName) {
            case 'Iphone11':
                return new Iphone11(serialNumber);
            case 'Iphone12':
                return new Iphone12(serialNumber);
            default:
                return new Error('Wrong Iphone Model');
        }
    }
}

module.exports = new IphoneFactory();
