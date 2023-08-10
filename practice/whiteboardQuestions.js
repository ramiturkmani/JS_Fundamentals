//Reverse a string
let string1 = "Hello World!";
let string1Reversed = "";

for(let i = string1.length; i >= 0; i--){
    string1Reversed += string1.charAt(i);
}

console.log(string1Reversed);


//Reverse every word in a string
let string2Reversed = "";
let string1Arr = string1.split(" ");

string1Arr.forEach(word => {
    for(let i = word.length; i >= 0; i--){
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
let numArray = [1, 3, 4, 7]; //Expected: 15
let numArraySum = 0;

numArray.forEach(num => {
    numArraySum = numArraySum + num;
});

console.log(numArraySum);