var Account = /** @class */ (function () {
    function Account(_accNo, _name, _balance) {
        this._accNo = _accNo;
        this._name = _name;
        this._balance = _balance;
    }
    Account.prototype.deposite = function (amount) {
        this._balance += amount;
    };
    Object.defineProperty(Account.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accNo", {
        get: function () {
            return this._accNo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
var acc1 = new Account(121113, "Akshay", 5000);
acc1.deposite(3000);
console.log(acc1.balance);
console.log(acc1);
