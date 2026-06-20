1. What is Execution Context?

Answer:

Execution Context is the environment in which JavaScript code is executed. It contains:

Variables

Functions

The value of this

Scope information

JavaScript creates an execution context whenever code runs.

2. What are the phases of Execution Context?

Answer:

There are two phases:

Memory Creation Phase (Creation Phase)

Variables are allocated memory.

Functions are stored in memory.

var variables are initialized with undefined.

Execution Phase

Code is executed line by line.

Variables receive their actual values.

Functions are invoked.

3. What is the output?

Answer:

Because var a is hoisted and initialized with undefined during the memory creation phase.

4. What is Call Stack?

Answer:

Call Stack is a data structure used by JavaScript to manage function execution. It follows the LIFO (Last In First Out) principle.

Example:

Execution order in stack:

5. What is a Closure?

Answer:

A closure is a function that remembers variables from its outer (lexical) scope even after the outer function has finished execution.

Example:

Output:

6. What are the real-world uses of Closures?

Answer:

Private variables

Event handlers

React Hooks

Timers and callbacks

Memoization

7. What is a Callback Function?

Answer:

A callback is a function passed as an argument to another function and executed later.

Example:

8. What is Callback Hell?

Answer:

Callback Hell occurs when multiple asynchronous operations are nested inside callbacks, making code difficult to read and maintain.

Example:

9. What is a Promise?

Answer:

A Promise is an object that represents the eventual completion or failure of an asynchronous operation.

10. What are the states of a Promise?

Answer:

Pending – Initial state.

Fulfilled – Operation completed successfully.

Rejected – Operation failed.

11. Difference between Callback and Promise?
    Callback Promise

Can lead to callback hell

Provides cleaner chaining

Harder error handling

Centralized error handling with .catch()

Less readable

More readable

12. What is Async/Await?

Answer:

Async/Await is syntactic sugar built on top of Promises that makes asynchronous code easier to read and write.

Example:

13. Difference between Promise and Async/Await?
    Promise Async/Await

Uses .then() and .catch()

Uses await inside async functions

Can become nested

Looks synchronous and cleaner

Slightly harder to read

Easier to understand

14. What is the Event Loop?

Answer:

The Event Loop is a mechanism that continuously checks whether the Call Stack is empty and moves tasks from the Callback Queue to the Call Stack for execution.

15. Explain the output

Answer:

Explanation:

Start is logged.

setTimeout callback goes to Web APIs.

End is logged.

Call Stack becomes empty.

Event Loop moves the callback to the Call Stack.

Timeout is logged.

16. What are Web APIs?

Answer:

Web APIs are browser-provided features that handle asynchronous operations outside the JavaScript engine.

Examples:

setTimeout
fetch

DOM events

Geolocation

Local Storage

17. What is the Callback Queue?

Answer:

The Callback Queue stores callback functions that are ready to execute after asynchronous operations complete. The Event Loop moves them to the Call Stack when the stack becomes empty.

18. What is the difference between Synchronous and Asynchronous code?
    Synchronous Asynchronous

Executes line by line

Does not block execution

Waits for each operation

Operations can complete later

Blocking

Non-blocking

19. What is the output?

Answer:

Explanation:

1 and 4 execute synchronously.

Promise callback goes to the Microtask Queue.

setTimeout callback goes to the Callback Queue.

Microtasks are executed before callbacks.

20. Why are Closures important in React?

Answer:

Closures are fundamental to React because hooks and event handlers rely on them. Functions inside components remember the component's state and props through closures.

Example:

handleClick remembers the value of count through closure.

Day 2 Revision Checklist

Execution Context

Memory Creation Phase

Execution Phase

Call Stack

Closures

Callbacks

Callback Hell

Promises

Async/Await

Event Loop

Web APIs

Callback Queue

Microtask Queue
