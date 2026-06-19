Topics Covered Today

1. Variables

var
Function scoped
Can be redeclared
Hoisted with undefined

let
Block scoped
Cannot be redeclared
Can be reassigned

const
Block scoped
Cannot be reassigned
Preferred by default

2. Data Types

Primitive Types
String
Number
Boolean
Undefined
Null
BigInt
Symbol
Reference Types
Object
Array
Function
Key Concept

Primitive:

let a = 10;
let b = a;

Copies value.

Reference:

let user1 = {name:"Moorthi"};
let user2 = user1;

Copies reference.

3. Scope

Global Scope
let name = "Moorthi";

Function Scope
function test(){
let age = 25;
}

Block Scope
if(true){
let city = "Madurai";
}

4. Hoisting

JavaScript moves declarations to the top.

console.log(a);
var a = 10;

Output:

undefined
Temporal Dead Zone
console.log(age);
let age = 25;

Error.

5. Type Coercion
   "5" + 1

Output:

"51"
"5" - 1

Output:

4

6. Equality Operators
   Loose Equality
   5 == "5"

Output:

true
Strict Equality
5 === "5"

Output:
false

7. Functions
   Function Declaration
   function add(a,b){
   return a+b;
   }
   Function Expression
   const add = function(a,b){
   return a+b;
   }
   Arrow Function
   const add = (a,b)=>a+b;

8. Objects
   const user = {
   name:"Moorthi",
   age:25
   }

Operations:

Read
Update
Delete
Add Property

9. Arrays
   const skills = [
   "Flutter",
   "React",
   "Node"
   ];

Operations:

Access
Insert
Update
Delete
Array Methods Covered
Basic
push()

Add at end.
pop()

Remove last.

shift()

Remove first.

unshift()

Add first.

Intermediate
forEach()

Loop.

map()

Transform data.

filter()

Filter data.

find()

Get first matching item.

Advanced
some()

At least one match.

every()

All match.

reduce()

Convert array into one value.

sort()

Sort data.

slice()

Copy array.

splice()

Add/remove elements.

Project Covered
Student Management System

Features:

addStudent()
updateStudent()
deleteStudent()
findStudent()
listStudents()

Concepts Used:
Arrays
Objects
Functions
Array Methods
Conditionals
