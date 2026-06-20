1. What is Execution Context?
   Answer

Execution Context is the environment where JavaScript code is executed.

Every execution context contains:

Variables
Functions
Scope information
this keyword
Example
var name = "Moorthi";

function greet() {
console.log("Hello");
}

greet();
Explanation

When JavaScript runs:

Global Execution Context is created.
Memory is allocated for variables and functions.
Code executes line by line.
A new Function Execution Context is created when greet() is called. 2. Explain the Memory Creation Phase
Example
console.log(a);

var a = 10;
Memory Phase
a = undefined
Execution Phase
console.log(a); // undefined

a = 10;
Output
undefined 3. What is Hoisting?
Answer

Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution.

Example
sayHello();

function sayHello() {
console.log("Hello");
}
Output
Hello

Because function declarations are fully hoisted.

4. What is Call Stack?
   Example
   function one() {
   two();
   }

function two() {
three();
}

function three() {
console.log("Inside Three");
}

one();
Stack Flow
one()
two()
three()

Then:

three() removed
two() removed
one() removed
Output
Inside Three 5. What is a Closure?
Example
function outer() {
let count = 0;

return function inner() {
count++;
console.log(count);
};
}

const counter = outer();

counter();
counter();
counter();
Output
1
2
3
Explanation

inner() remembers count even after outer() finishes execution.

6. Real-world Closure Example
   Private Variable
   function bankAccount() {
   let balance = 1000;

return {
deposit(amount) {
balance += amount;
},

    getBalance() {
      return balance;
    }

};
}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance());
Output
1500 7. What is a Callback?
Example
function greet(name, callback) {
console.log("Hello " + name);

callback();
}

function done() {
console.log("Completed");
}

greet("Moorthi", done);
Output
Hello Moorthi
Completed 8. What is Callback Hell?
Example
login(() => {
getProfile(() => {
getOrders(() => {
getPayments(() => {
console.log("Done");
});
});
});
});
Problem
Hard to read
Hard to debug
Hard to maintain 9. What is a Promise?
Example
const promise = new Promise(
(resolve, reject) => {
resolve("Success");
}
);

promise.then(result => {
console.log(result);
});
Output
Success 10. Promise States
Example
const promise = new Promise(
(resolve, reject) => {
const success = true;

    if (success) {
      resolve("Success");
    } else {
      reject("Failed");
    }

}
);

States:

Pending
Fulfilled
Rejected 11. Promise Chaining
Example
Promise.resolve(10)
.then(num => num \* 2)
.then(num => num + 5)
.then(console.log);
Output
25 12. What is Async/Await?
Example
function fetchUser() {
return Promise.resolve("Moorthi");
}

async function getUser() {
const user = await fetchUser();

console.log(user);
}

getUser();
Output
Moorthi 13. Error Handling with Async/Await
Example
async function getData() {
try {
throw new Error("Something went wrong");
} catch (error) {
console.log(error.message);
}
}

getData();
Output
Something went wrong 14. What is Event Loop?
Example
console.log("Start");

setTimeout(() => {
console.log("Timeout");
}, 0);

console.log("End");
Output
Start
End
Timeout
Explanation
Start → Call Stack
setTimeout → Web APIs
End → Call Stack
Timeout callback → Callback Queue
Event Loop moves callback to Call Stack 15. What are Web APIs?
Example
setTimeout(() => {
console.log("Timer Done");
}, 1000);

Browser handles timer.

JavaScript engine does not.

Examples:

setTimeout
fetch
DOM Events
Geolocation 16. What is Callback Queue?
Example
setTimeout(() => {
console.log("A");
}, 0);

console.log("B");
Output
B
A

Because callback waits in Callback Queue until Call Stack is empty.

17. What is Microtask Queue?
    Example
    console.log("1");

Promise.resolve()
.then(() => console.log("2"));

console.log("3");
Output
1
3
2
Explanation

Promise callbacks go to Microtask Queue.

Microtasks execute before Callback Queue.

18. Explain Output
    console.log("A");

setTimeout(() => {
console.log("B");
}, 0);

Promise.resolve()
.then(() => {
console.log("C");
});

console.log("D");
Output
A
D
C
B
Why?

Execution order:

Call Stack
↓
Microtask Queue
↓
Callback Queue

Promise executes before setTimeout.

19. Difference Between Synchronous and Asynchronous
    Synchronous
    console.log("A");
    console.log("B");
    console.log("C");

Output:

A
B
C
Asynchronous
console.log("A");

setTimeout(() => {
console.log("B");
}, 0);

console.log("C");

Output:

A
C
B 20. Closure Example in React
function Counter() {
const [count, setCount] = useState(0);

function handleClick() {
console.log(count);
}

return (
<button onClick={handleClick}>
Click
</button>
);
}
Explanation

handleClick() remembers count through closure.

This is one of the reasons closures are important in React.
