//This is the student managment system javascript program

/*
Student contains this details like
StudentName, Age, Gender, Class
*/

const studentObjectArray = [
  {
    studentName: "Rakesh",
    age: 10,
    gender: "male",
    Class: "5th Standard",
  },
];

const arrayPractice = ["Moorthi", "Gokul", "Vinith", "Yogesh", "Murugesh"];

const numberArray = [10, 20, 30, 47, 57, 60, 70];

//1.Push() method add new Element to the array at the end of an array

arrayPractice.push("Ramky");
console.log(arrayPractice);

//2.pop() method removes the last element of the array

arrayPractice.pop();
console.log(arrayPractice);

//3.shift() method removes first element of an array

arrayPractice.shift();
console.log(arrayPractice);

//4.unshift() method add the element first to the array

arrayPractice.unshift("Vetri", "Gopi");
console.log(arrayPractice);

//5. includes() method check whether the value is exist or not in the array it returns true or false values

const data = arrayPractice.includes("Vetri");
console.log(data);

//6.indexof() method returns the index of the search element

console.log(arrayPractice.indexOf("Vinith"));

//7.Creates an copy of part of array

console.log(arrayPractice.slice(1, 4));

//8.splice() method used for add or remove elements

// console.log(numberArray.splice(1, 1));

//9.foreach() method used for loops throguh an array

// numberArray.forEach((value, index) => {
//   console.log(value);
// });

//10.map() method used for transform the data

const mapMethod = numberArray.map((number, index) => number * 2);
console.log(mapMethod);

//11.filter() returns matching item

const filterMethod = numberArray.filter((num, index) => num % 2 === 0);
console.log(filterMethod);

//12.find() method returns the first matching element on the array
const findMethod = numberArray.find((num, index) => num === 47);
console.log(findMethod);

//13.some() method returns if one of the condition or values exist in the array returns true or false value
const oddArray = [1, 32, 5, 7, -2];
const someMethod = oddArray.some((num, index) => num % 2 === 0);
console.log(someMethod);

//14.every() method check all the items are matched in the array or not and it was returned true or false

const everyMethod = oddArray.every((num, index) => num % 2 != 0);
console.log(everyMethod);

//15.reduce() method

const sumMethod = oddArray.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(sumMethod);

//16. sort()

const sortMethod = oddArray.sort((a, b) => a - b);
console.log(sortMethod);

//17. reverse() method is used to reverse the elements of an array

console.log(oddArray.reverse());

//Map practice

const employees = [
  { id: 1, name: "Moorthi", salary: 50000 },
  { id: 2, name: "John", salary: 60000 },
  { id: 3, name: "David", salary: 70000 },
];

const employeeMap = employees.map((employee, index) => {
  if (employee.id === 3) {
    console.log(employee);
  }
});

const employeefilter = employees.filter((employee, index) => {
  if (employee.salary <= 50000) {
    console.log(employee.name);
  }
});
