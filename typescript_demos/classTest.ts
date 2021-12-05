class Student{

    constructor(public firstName:string, public lastName:string){

    }
    get FullName(){
        return `${this.firstName} - ${this.lastName}`
    }
    set FullName(value:string){
        let values:string[] = value.split(" ");
        //console.log(values);
        this.firstName = values[0];
        this.lastName = values[1];
    }
}

let s1 = new Student("AKshay" , "Sawant");
console.log(s1);
s1.firstName ="AKSHAY";
s1.lastName = "SAWANT";
console.log(s1);
console.log(s1.FullName);

s1.FullName = "Rahul Dravid";
console.log(s1);
console.log(s1.FullName);