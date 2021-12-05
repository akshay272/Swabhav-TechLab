printDetails([{ firstName: 'Akshay', id: 101, lastName: 'Sawant' },
    { firstName: 'Shivam', id: 102, lastName: 'Sutar', location: 'Mumbai' },
]);
function printDetails(customers) {
    for (var c in customers) {
        console.log(c);
    }
}
