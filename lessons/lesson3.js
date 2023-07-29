//Objects

let customer = {
    firstName: 'John',
    lastName: 'Smith',
    cars: ["Volvo", "Toyota", "Tesla"]
}
//Dot Notation
customer.firstName = "Mike";

//Bracket Notation
customer['lastName'] = "Silver";

console.log(`${customer.firstName} ${customer.lastName}`);

//Arrays
let car = ["Volvo", "Toyota", "Tesla"];
car[1] = "BMW";
console.log(car[1]);
console.log(customer.cars[0]);