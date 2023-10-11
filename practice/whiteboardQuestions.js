//Reverse a string
//First way
let string1 = "Hello World!";
let string1Reversed = "";

for (let i = string1.length; i >= 0; i--) {
    string1Reversed += string1.charAt(i);
}

console.log(string1Reversed);

//Second way
function reverseString(str) {
    console.log(str.split("").reverse().join(""));
}

reverseString("apple");


//Reverse every word in a string
let string2Reversed = "";
let string1Arr = string1.split(" ");

string1Arr.forEach(word => {
    for (let i = word.length; i >= 0; i--) {
        string2Reversed += word.charAt(i);
    }
    string2Reversed += " ";
})

console.log(string2Reversed);


//Remove duplicates from an array
let array1 = [1, 1, 2, 2, 2, 3, 4, 4]; //Expected: [1, 2, 3, 4]
let newArray1 = [];

for (let i = 0; i < array1.length; i++) {
    if (!newArray1.includes(array1[i])) {
        newArray1.push(array1[i]);
    }
}

console.log(newArray1);


//Multiply every array element by 3
let array2 = [1, 2, 3, 4];
let newArray2 = array2.map(x => x * 3);

console.log(newArray2);


//Write code to convert an array of strings to an array of the lengths of those strings
let array3 = ["Orange", "Apple", "Banana", "Kiwi"]; //Expected: [6, 5, 6, 4]
let array3Lengths = [];

for (let i = 0; i < array3.length; i++) {
    array3Lengths[i] = array3[i].length;
}

console.log(array3Lengths);


//Write code to sum an array of numbers
let numArray = [4, 3, 7, 1]; //Expected: 15
let numArraySum = 0;

numArray.forEach(num => {
    numArraySum = numArraySum + num;
});

console.log(numArraySum);


//Write a function that can be called like so: greeter(“Hello”)(“Candidate”) and will log “Hello, Candidate!” to the console
function greeter(greeting) {
    return function (greetee) {
        console.log(`${greeting}, ${greetee}!`);
    }
};

greeter("Hello")("Candidate");


//Sort an array
console.log(numArray.sort());
console.log(array3.sort());


//Fill in the blanks in the months array
const months = ["Jan", "March", "April", "June"];

months.splice(1, 0, "Feb");
months.splice(4, 0, "May");

console.log(months);


//Edit all elements within an array of number to only have 2 decimal places
let numArray2 = [1.2345, 1.4, 1.54325, 1.87, 1.952];
let numArray2Fixed = [];

for (let i = 0; i < numArray2.length; i++) {
    numArray2Fixed[i] = Number(numArray2[i].toFixed(2));
};

console.log(numArray2Fixed);


//Set every element in an array with an even index to be upper case
for (let i = 0; i < months.length; i++) {
    if (i % 2 == 0) {
        months[i] = months[i].toUpperCase();
    }
};

console.log(months);


//Retrieve the length of each element in an array
let elementLengths = months.map(element => element.length);

console.log(elementLengths);


//Write a function name noEmtpy() which ensures that there are no empty elements within an array
function noEmpty(arr) {
    return !arr.includes();
}

console.log(noEmpty(["foo", "bar", "foobar"])); //true


//Write a function which takes two numbers and returns the count of the numbers between the start and end number that are divisible by 5 
function countFiveDividend(num1, num2) {
    let big = 0;
    let small = 0;
    let count = 0;

    if (num1 >= num2) {
        big = num1;
        small = num2;
    } else {
        big = num2;
        small = num1;
    }

    for (let i = small; i <= big; i++) {
        let str = i.toString();
        if (str.charAt(str.length - 1) == 0 || str.charAt(str.length - 1) == 5) {
            count++;
        }
    }
    return (count);
}
console.log(countFiveDividend(12, 28));




// Create an array to store values that have been parsed over at least once in a loop; "uniques array"
var uniqueArr = [];
function removeDuplicates(arr) {
    return arr.filter(function (element, index) {
        if (uniqueArr.indexOf(element) == -1) {
            uniqueArr.push(element);
            return element;
        }
    });
}
console.log(removeDuplicates(["tech", "tech", true, false, true, 2, 2, 3, -1, 7, 7]));