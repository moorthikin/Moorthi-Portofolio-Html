//1.Variables
console.log(a);

var a = 10;

console.log(a);
let b = "Moorthi";
const PI = 3.14;

//2.Data Types

/*
String
Number 
Boolean
Null
Undefined
*/

let nameofthePerson = "Moorthi";
let age = 23;
let isMale = true;
let address = null;
let live = undefined;
let detailsArray = ["Moorthi", 23, true];
let detailsObject = {
  name: "Moorthi",
  ageofPerson: 23,
  gender: true,
};
detailsObject.ageofPerson = 40;

console.log(detailsObject.ageofPerson);

const { name, ageofPerson, gender } = detailsObject;

console.log(isMale);

detailsArray.push("Hello World");
detailsArray.pop([1]);
console.log(detailsArray);

// 3.Function
//function declaration
function hello() {}

//function expression
const add = function (a, b) {
  return a + b;
};

//Arrow function

const addtwoNumber = (a, b) => a + b;

console.log(addtwoNumber(3, 6));
