// print the table of any number example 5

// for(i=5; i<=50;i=i+5){
//     console.log(i)
// }

let i=5
while(i<=50){
    console.log(i);
    i=i+5

}

const person = {
    name: 'John',
    age: 30,
    city: 'New York'
};
console.log(person)
 
for (let key in person) {
    // 'key' represents the property names (or keys) of the object
    console.log(key + ": " + person[key]);  // Output: name: John, age: 30, city: New York
    // Explanation: The 'for...in' loop goes through all the keys of the 'person' object.
    // It prints both the key (e.g., 'name') and the value of that key (e.g., 'John').
}


