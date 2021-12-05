class Account{

    constructor(private _accNo:number, private _name:string, private _balance:number){

    }
    
    deposite(amount){
        this._balance += amount;
    }
    get balance(){
        return this._balance;
    }
    get accNo(){
        return this._accNo;
    }
    get name(){
        return this._name;
    }
}

let acc1 = new Account(121113, "Akshay", 5000);
acc1.deposite(3000);
console.log(acc1.balance);
console.log(acc1);