"use strict";
exports.__esModule = true;
exports.Account = exports.Customer = exports.Bank = void 0;
var Bank = /** @class */ (function () {
    function Bank(name, location) {
        this.name = name;
        this.location = location;
    }
    return Bank;
}());
exports.Bank = Bank;
var Customer = /** @class */ (function () {
    function Customer(cid, name) {
        this.cid = cid;
        this.name = name;
    }
    return Customer;
}());
exports.Customer = Customer;
var Account = /** @class */ (function () {
    function Account(balance) {
        this.balance = balance;
    }
    return Account;
}());
exports.Account = Account;
