interface ICustomer{
    id : number,
    firstName : string,
    lastName : string ,
    location ?: string
}

printDetails([{firstName : 'Akshay', id : 101, lastName : 'Sawant'},
               {firstName : 'Shivam' , id : 102, lastName : 'Sutar', location : 'Mumbai'},
             ]);

function printDetails(customers: Array<ICustomer>){
    for(let c in customers){
        console.log(c);
    }
}