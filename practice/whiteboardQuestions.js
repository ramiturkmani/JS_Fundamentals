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