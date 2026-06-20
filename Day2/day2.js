//Function in js

//Function Statement and function declaration is same
function a() {
  console.log("a called");
}

//Function expression

var b = function () {
  console.log("Hello EveryOne!");
};

//Anonymous function
//function without name is known as anonymous function
//Anonymous function are used to assigned as a value to the variables

/*function (){
}
*/

//Named function expression
const d = function xyz() {
  console.log(xyz);
};

//Difference between Parameters and Arguments
//(parameter1,parameter2) - This identifieres or knowns as parameters
function name(parameter1, parameter2) {}
//Values we passed inside the functions is known as Arguments
name(1, 3);

//First class functions
function fisrt(param) {
  //console.log(param);
  return function () {};
}
//fisrt(function () {});
console.log(fisrt());

//ability to use functions as values assigned to variables and and returned the functions in functions as known as first class functions

//Arrow functions
//2015 ES6 arrow functions are introduced 
