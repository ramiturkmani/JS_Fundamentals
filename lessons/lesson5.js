//Logical "AND"
console.log(true && false); //ALL values must be TRUE for the expression to be TRUE

//Logical "OR"
console.log(true || false); // ANY value should be TRUE for the expression to be TRUE

let ageIsMoreThanEighteen = true;
let isUSCitizen = true;

let eligibilityForDriversLicense = ageIsMoreThanEighteen && isUSCitizen;
console.log('This customer is eligible for Driver\'s Licesne: ' + eligibilityForDriversLicense);

//Logical "NOT"
console.log(!true); //False
console.log(6 == 10); //False
console.log(6 != 10); //True
