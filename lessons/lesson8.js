// Declarative function
function helloOne(){
    console.log('Hello one!');
}
helloOne();

//Anonymous function
let helloTwo = function(){
    console.log('Hello Two!');
}
helloTwo();

//ES6 function syntax or arrow function
let helloThree = () => {
    console.log('Hello Three!');
}
helloThree();

//Functions with arguments
function printName(name, lastName){
    console.log(name + ' ' + lastName);
}

printName('John', 'Smith');

//Function with return
function multiplyByTwo(number){
    let result = number * 2;
    return result;
}

let myResult = multiplyByTwo(20);
console.log(myResult);