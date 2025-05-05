//In JavaScript, an array is a special type of object used to store multiple values in a single variable. Arrays can hold different types of data (numbers, strings, objects, etc.) and are indexed by numbers, starting at 0.
//1. Declaring an Array
let fruits = ['apple', 'banana', 'cherry'];
//2. Accessing Array Elements
console.log(fruits[0]); // Outputs: 'apple'
console.log(fruits[1]); // Outputs: 'banana'

//3. Array Methods
//push(): Adds a new element to the end of the array.
fruits.push('orange'); // Adds 'orange' to the array
console.log(fruits); // ['apple', 'banana', 'cherry', 'orange']
//pop(): Removes the last element of the array.
fruits.pop(); // Removes 'orange'
console.log(fruits); // ['apple', 'banana', 'cherry']
//shift(): Removes the first element of the array.
fruits.shift(); // Removes 'apple'
console.log(fruits); // ['banana', 'cherry']
//unshift(): Adds a new element to the beginning of the array.
fruits.unshift('grape'); // Adds 'grape' at the beginning
console.log(fruits); // ['grape', 'banana', 'cherry']
//length: Gives the length (number of elements) of the array.
console.log(fruits.length); // 3
//forEach(): Loops through each element in the array.
fruits.forEach(fruit => {
    console.log(fruit); // 'grape', 'banana', 'cherry'
});
  



