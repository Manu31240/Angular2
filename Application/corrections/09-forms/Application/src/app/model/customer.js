"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Customer = /** @class */ (function () {
    function Customer(name, address, creditCard) {
        if (name === void 0) { name = ''; }
        if (address === void 0) { address = ''; }
        if (creditCard === void 0) { creditCard = ''; }
        this.name = name;
        this.address = address;
        this.creditCard = creditCard;
    }
    return Customer;
}());
exports.Customer = Customer;
