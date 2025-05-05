//In JavaScript, there are several types of functions that you can use based on the structure, context, and needs of your code. Here’s a short overview of all the types of functions in JavaScript:
//Functions=A JavaScript function is a block of code designed to perform a particular task.
//A JavaScript function is executed when "something" invokes it (calls it).

// 1. Function Declaration (Named Function)
// A function declaration defines a named function that can be called anywhere in the code after the declaration. It has a specific name, parameters, and a body of code.
function add(a, b) {
    return a + b;
}

console.log(add(2, 3));  // Output: 5

// 2. Function Expression (Anonymous Function)
// A function expression is a function defined within an expression. It can be anonymous, meaning it doesn't have a name, and can be assigned to variables, passed as arguments, or returned from other functions.
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 3));  // Output: 2

// 3. Arrow Function (Fat Arrow Function)
// Arrow functions provide a more concise syntax for writing functions. They are anonymous, and they don't have their own this, which makes them ideal for callback functions.
const multiply = (a, b) => a * b;

// 4. Immediately Invoked Function Expression (IIFE)
// An IIFE is a function that is defined and executed immediately after its creation. It’s often used to create a local scope to avoid polluting the global namespace.
(function() {
    console.log("This function runs immediately!");
})();

// 5. Generator Function
// A generator function is a special type of function that can be paused and resumed. It uses the function* syntax and the yield keyword to return a value and pause the function’s execution.
function* count() {
    yield 1;
    yield 2;
    yield 3;
}

const counter = count();
console.log(counter.next().value); // Output: 1
console.log(counter.next().value); // Output: 2
console.log(counter.next().value); // Output: 3

// 6. Anonymous Function
// An anonymous function is simply a function that is defined without a name. It’s usually used as a function expression or passed as an argument to another function.
setTimeout(function() {
    console.log("This is an anonymous function!");
}, 1000);
// 7. Callback Function
// A callback function is a function that is passed as an argument to another function and is executed after the completion of that function. It’s commonly used in asynchronous operations
function fetchData(callback) {
    setTimeout(() => {
        console.log("Data fetched");
        callback();
    }, 1000);
}

fetchData(() => {
    console.log("Callback function executed!");
});
// 8. Constructor Function
// A constructor function is used to create new objects and initialize their properties. It’s called using the new keyword. Constructor functions are typically capitalized to distinguish them from regular functions.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person("John", 30);
console.log(person1.name);  // Output: John
// 9. Methods in Objects
// Methods are functions that are defined inside an object. They can access and manipulate the properties of the object.
const obj = {
    methodName: function() {
        // Function body
    }
};
// 10. Recursion Function
// A recursive function is a function that calls itself until a base condition is met. It's useful for problems that can be broken down into smaller sub-problems, such as calculating factorials or traversing tree-like structures.
function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120


//Return=In JavaScript, the return statement is used to exit a function and optionally return a value to the place where the function was called. It effectively ends the function's execution and returns control to the calling code.
// A simple function that returns a value
function add(a, b) {
    return a + b; // Returns the sum of a and b
  }
  
  let result = add(3, 4);
  console.log(result); // Output: 7
  
