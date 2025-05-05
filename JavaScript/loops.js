// JavaScript Loops - Reference Guide
 
// Loops are essential programming structures that allow code to be executed repeatedly based on a condition or a counter. 
// They are commonly used to perform repetitive tasks, such as iterating through arrays or processing items until a specific condition is met.
// The purpose of loops is to save time, avoid code repetition, and automate repetitive tasks in a program.
 
// 1. For Loop
// The 'for' loop is used when you know the exact number of iterations or when you have an index or counter that needs to be incremented/decremented.
// Syntax: for(initialization; condition; increment/decrement)
// The for loop is best when you want to set an explicit condition and control the loop's flow using a counter.
 
for (let i = 0; i < 5; i++) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
    // Explanation: 
    // - The loop starts with 'i = 0'.
    // - The loop condition (i < 5) is checked.
    // - If true, the code block inside the loop runs.
    // - After each iteration, the increment (i++) increases the value of 'i' by 1.
    // - Once 'i' reaches 5, the condition is false, and the loop terminates.
}
 
// 2. While Loop
// The 'while' loop is used when the number of iterations is not known in advance. 
// The loop will continue to execute as long as the given condition evaluates to 'true'.
// Be mindful to ensure that the condition eventually becomes 'false' or the loop will run indefinitely.
 
let i = 0;
while (i < 5) {
    console.log(i);  // Output: 0, 1, 2, 3, 4
    i++;  // Increment the counter 'i'
    // Explanation:
    // - The loop starts with 'i = 0'.
    // - The condition (i < 5) is checked before each iteration.
    // - If true, the code inside the loop runs.
    // - After running the code, the value of 'i' is increased by 1 using 'i++'.
    // - Once 'i' reaches 5, the condition becomes false, and the loop terminates.
}
 
// 3. Do...While Loop
// The 'do...while' loop is similar to the 'while' loop but with one key difference: it guarantees that the block of code will run **at least once**, 
// even if the condition is false initially. The condition is checked **after** the code executes.
 
i = 0;
do {
    console.log(i);  // Output: 0, 1, 2, 3, 4
    i++;  // Increment the counter 'i'
} while (i < 5);
// Explanation:
// - The loop starts with 'i = 0' and runs the code inside the loop first, then checks the condition (i < 5).
// - The block of code is executed **before** checking the condition, ensuring at least one iteration.
// - If the condition is true, the loop continues; otherwise, it stops after the last iteration.
// 4. For...in Loop
// The 'for...in' loop is used to iterate over the properties of an object. 
// It can also be used to iterate over the indices of an array, but it's not recommended for arrays because it may also iterate over inherited properties, 
// which could lead to unexpected results.
 
const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
 
for (let key in person) {
    // 'key' represents the property names (or keys) of the object
    console.log(key + ": " + person[key]);  // Output: name: John, age: 30, city: New York
    // Explanation: The 'for...in' loop goes through all the keys of the 'person' object.
    // It prints both the key (e.g., 'name') and the value of that key (e.g., 'John').
}
 
// Example: Array Iteration with 'for...in'
// Even though 'for...in' works with arrays, it's not ideal for this purpose because it also loops over array indices as properties of the array object.
const numbers = [10, 20, 30];
for (let index in numbers) {
    console.log(index + ": " + numbers[index]);  // Output: 0: 10, 1: 20, 2: 30
    // Explanation: The loop goes over the indices of the array and prints each index and its corresponding value.
    // For arrays, it's better to use 'for...of' as it directly provides the values instead of indices.
}
 
// 5. For...of Loop
// The 'for...of' loop is a modern loop that is used to iterate over the values of iterable objects, such as arrays, strings, maps, sets, etc.
// It provides a cleaner, more intuitive way to iterate over the actual values, without needing to work with indices.
 
let numbersArr = [10, 20, 30];
for (let num of numbersArr) {
    console.log(num);  // Output: 10, 20, 30
    // Explanation: The loop directly iterates over the values of the 'numbersArr' array.
    // Unlike 'for...in', it does not give you the indices (0, 1, 2), but instead directly gives you the values (10, 20, 30).
}
 
// Example: String Iteration with 'for...of'
// The 'for...of' loop can also iterate over strings, providing each character as an iteration.
let str = 'hello';
for (let char of str) {
    console.log(char);  // Output: h, e, l, l, o
    // Explanation: The loop iterates over each character in the string and prints it.
    // It avoids the need to deal with string indices (e.g., str[0], str[1], etc.).
}
 
// 6. Break Statement
// The 'break' statement is used to terminate a loop prematurely. It is useful when you need to stop the loop based on a certain condition, 
// without waiting for the loop's condition to become false.
 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;  // Breaks out of the loop when 'i' equals 5
    }
    console.log(i);  // Output: 0, 1, 2, 3, 4
    // Explanation:
    // - The loop starts with 'i = 0' and checks if 'i' equals 5.
    // - When 'i' reaches 5, the 'break' statement is triggered, and the loop terminates early, skipping the remaining iterations.
}
 
// 7. Continue Statement
// The 'continue' statement is used to skip the current iteration of the loop and move to the next iteration immediately, without executing the rest of the code in the loop for that iteration.
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;  // Skips the iteration when 'i' is 2
    }
    console.log(i);  // Output: 0, 1, 3, 4
    // Explanation:
    // - The loop starts from 'i = 0' and checks if 'i' equals 2.
    // - When 'i' is 2, the 'continue' statement skips that iteration, so 2 is not printed.
    // - The loop continues with 'i = 3' and proceeds as usual.
}
 
// Differences Between Loop Types:
 
/**
* - **For Loop**: Best for known, finite iterations, or when you need to track an index/counter explicitly. 
*   It's the most flexible loop structure because it gives you control over the initialization, condition, and increment/decrement in a single line.
* 
* - **While Loop**: Suitable for indefinite loops where the number of iterations depends on a condition that might change over time. 
*   The condition is checked before each iteration, so it may not run at all if the condition is false initially.
* 
* - **Do...While Loop**: Similar to the 'while' loop, but the code block is executed **at least once** before the condition is checked. 
*   It's useful when you want to ensure that the block of code runs at least once, such as when prompting a user for input.
* 
* - **For...in Loop**: Best for iterating over the properties of an object. However, it's not ideal for arrays because it can also iterate over inherited properties.
*   Use it when you need to access keys or indices of an object or array.
* 
* - **For...of Loop**: Best for iterating over iterable objects like arrays, strings, and other collections. 
*   It is cleaner and more intuitive than the 'for...in' loop when working with arrays and collections, as it directly gives you the values.
*/