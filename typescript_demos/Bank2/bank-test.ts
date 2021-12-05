import { Account, Bank, Customer } from "./bank-module";

let acc1 = new Account(10001);
let bank1 = new Bank("HDFC", "Navi Mumbai");
let cust1 = new Customer(1021, "Akshay");
console.log(acc1, bank1, cust1);
console.log({acc1,bank1, cust1});