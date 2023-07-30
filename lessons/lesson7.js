// Loops

console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

// For i loop
for(let i = 0; i < 5; i++) {
    console.log("Hello World!");
}

// For of loop
let cars = ["Volvo", "Toyota", "Tesla"];

for (let car of cars){
    console.log(car);
    if (car == "Toyota"){
        break;
    }
}

//ES6 syntax For each loop
cars.forEach(car => {
    console.log(car);
})