Q1. What is the difference between var, let, and const?

Answer:

Feature var let const
Scope Function Block Block
Redeclaration Allowed Not Allowed Not Allowed
Reassignment Allowed Allowed Not Allowed
Hoisted Yes Yes (TDZ) Yes (TDZ)

Example:

var a = 10;
var a = 20;

let b = 10;
// let b = 20; // Error

const c = 10;
// c = 20; // Error
Q2. What is Hoisting?

Answer:

Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

Example:

console.log(a);

var a = 10;

Internally:

var a;

console.log(a);

a = 10;

Output:

undefined
Q3. What is the Temporal Dead Zone (TDZ)?

Answer:

The Temporal Dead Zone is the time between entering a scope and the variable declaration where a let or const variable cannot be accessed.

Example:

console.log(age);

let age = 25;

Output:

ReferenceError
Q4. Difference between == and ===?

Answer:

==

Compares values only
Performs type conversion

===

Compares value and type
No type conversion

Example:

5 == "5"

Output:

true

Example:

5 === "5"

Output:

false

Always prefer:

===
Q5. What are Primitive and Reference Data Types?

Answer:

Primitive Types
String
Number
Boolean
Undefined
Null
BigInt
Symbol

Stored by value.

Example:

let a = 10;
let b = a;

b = 20;

console.log(a);

Output:

10
Reference Types
Object
Array
Function

Stored by reference.

Example:

let user1 = {
name: "Moorthi"
};

let user2 = user1;

user2.name = "John";

console.log(user1.name);

Output:

John
Q6. What is the output?
const a = {
name: "Moorthi"
};

const b = a;

b.name = "John";

console.log(a.name);

Answer:

Output:

John

Because objects are reference types.

Both variables point to the same memory location.

Q7. Difference between Function Declaration and Function Expression?

Answer:

Function Declaration:

function add(a, b) {
return a + b;
}

Function Expression:

const add = function(a, b) {
return a + b;
};

Function declarations are hoisted completely.

Function expressions are not.

Q8. What is an Arrow Function?

Answer:

Arrow functions provide shorter syntax for writing functions.

Example:

const add = (a, b) => a + b;

Benefits:

Shorter syntax
Commonly used in React
Different this behavior
Q9. What is Scope?

Answer:

Scope determines where a variable can be accessed.

Types:

Global Scope
let name = "Moorthi";

Accessible everywhere.

Function Scope
function test() {
let age = 25;
}

Accessible only inside the function.

Block Scope
if (true) {
let city = "Madurai";
}

Accessible only inside the block.

Q10. Difference between Function Scope and Block Scope?

Answer:

Function Scope:

function test() {
var age = 25;
}

Accessible throughout the function.

Block Scope:

if (true) {
let age = 25;
}

Accessible only within the block.

Q11. Difference between map() and forEach()?

Answer:

forEach()

Used for looping
Returns undefined
numbers.forEach(num => console.log(num));

map()

Used for transforming data
Returns a new array
const doubled = numbers.map(num => num \* 2);

Output:

[2, 4, 6]
Q12. Difference between find() and filter()?

Answer:

find()

Returns first matching element
users.find(user => user.id === 1);

Returns:

{
id:1
}

filter()

Returns all matching elements
Returns array
users.filter(user => user.age > 18);

Returns:

[
{...},
{...}
]
Q13. Difference between slice() and splice()?

Answer:

slice()

Creates copy
Does not modify original array
const result = arr.slice(1, 3);

splice()

Adds/removes elements
Modifies original array
arr.splice(1, 2);
Q14. What is reduce()?

Answer:

reduce() converts an array into a single value.

Example:

const numbers = [10, 20, 30];

const total = numbers.reduce(
(sum, num) => sum + num,
0
);

Output:

60

Real-world use cases:

Cart total
Salary total
Analytics
Q15. Difference between some() and every()?

Answer:

some()

Returns true if at least one item matches

Example:

[1, 3, 5, 8].some(
num => num % 2 === 0
);

Output:

true

every()

Returns true only if all items match

Example:

[2, 4, 6].every(
num => num % 2 === 0
);

Output:

true
Q16. How would you find duplicate emails from an array of users?

Answer:

Use:

Set
filter()

Example approach:

const emails = users.map(user => user.email);

const duplicates = emails.filter(
(email, index) =>
emails.indexOf(email) !== index
);
Q17. How would you calculate total order value?

Answer:

Use:

reduce()

Example:

const total = orders.reduce(
(sum, order) =>
sum + order.price,
0
);

Q18. How would you filter active users?

Answer:

Use:

filter()

Example:

const activeUsers = users.filter(
user => user.isActive
);
Q19. How would you get all usernames from users?

Answer:

Use:

map()

Example:

const usernames = users.map(
user => user.name
);
Q20. How would you find a user by ID?

Answer:

Use:

find()

Example:

const user = users.find(
user => user.id === 5
);
Day 1 Revision Checklist

You should be able to explain:

✅ var vs let vs const

✅ Hoisting

✅ TDZ

✅ Scope

✅ Primitive vs Reference Types

✅ Function Declaration vs Expression vs Arrow Function

✅ map()

✅ filter()

✅ find()

✅ reduce()

✅ some()

✅ every()

✅ slice() vs splice()
