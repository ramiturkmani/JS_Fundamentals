//Concatination and Interpolation

let price = 50;
let itemName = "Cup";
let messageToPrint = "The price for your " + itemName + " is " + price +  " dollars"; //concatination
let messageToPrint2 = `The price for your ${itemName} is ${price} dollars`; //interpolation
console.log(messageToPrint);
console.log(messageToPrint2);