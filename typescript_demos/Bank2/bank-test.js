"use strict";
exports.__esModule = true;
var bank_module_1 = require("./bank-module");
var acc1 = new bank_module_1.Account(10001);
var bank1 = new bank_module_1.Bank("HDFC", "Navi Mumbai");
var cust1 = new bank_module_1.Customer(1021, "Akshay");
console.log(acc1, bank1, cust1);
console.log({ acc1: acc1, bank1: bank1, cust1: cust1 });
