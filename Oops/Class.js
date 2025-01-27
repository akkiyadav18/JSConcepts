// 1. A class is a blueprint or template for creating objects. It defines a set of properties (attributes) and behaviors (methods) that the objects created from the class will have.
// Example: A Car class could have attributes like color, model, and speed, and methods like accelerate() and brake().

// 2. An object is an instance of a class. It represents a specific entity that follows the structure defined by the class.
// Example: If Car is a class, an object could be myCar, which has specific values for the properties like color='red' and model='Tesla'.


// 3. Encapsulation
// Encapsulation is the concept of bundling the data (attributes) and the methods (functions) that operate on the data within a single unit (a class). It also involves restricting access to some of the object's components, which is known as information hiding.
// Example: You might have private attributes that can't be accessed directly outside the class, and instead, provide public methods (getters and setters) to access or modify the data.


// 4. Abstraction
// Abstraction refers to hiding the complex implementation details and showing only the essential features of an object. The goal is to expose only relevant functionality to the outside world.
// Example: A Car class might have an abstract method start(), which hides the complexities of how the car starts (like turning on the ignition) and just focuses on the interface for starting a car.


// 5. Inheritance
// Inheritance allows a new class (called the subclass or derived class) to inherit the properties and methods of an existing class (called the superclass or base class). It promotes code reusability and establishes a relationship between classes.
// Example: A Sedan class could inherit from the Car class and have additional features specific to sedans, while still inheriting common behaviors like accelerate().


// 6. Polymorphism
// Polymorphism allows objects of different classes to be treated as objects of a common superclass. It enables a single interface to represent different underlying forms (types). The two main types are:
// Method Overloading: Multiple methods with the same name but different parameters.

// Method Overriding: A subclass provides its own implementation of a method that is already defined in its superclass.
// Example: A method makeNoise() could be overridden in different subclasses like Dog or Cat, each providing a different implementation for making noise.


// object is a unique entity that contains methods and properties , 
// The characteristics of an object is  called properties , and the action performed in objects are called methods , 
// Object can be created by two type (object Literals ,object  constructor ) Instance of a class refers to an individual object  created from  the class. 
// Class  is the blueprint of the object . inheritance, allowing one class to inherit properties and methods from another class.  Abstraction means displaying only essential information and hiding the details.
//  Data abstraction refers to providing only essential information about the data to the outside world, hiding the background details or implementation
// Encapsulation: The process of wrapping properties and functions within a single unit is known as encapsulation.  Constructor is functions used to set up values  and properties of an object   in a class polymorphism allows you to use a single method or function to operate on different  objects. 
// in different way . super is used to call the method or constructor of a parent class.The super keyword in JavaScript is used to call methods and access properties from a parent class in class inheritance.
//  this refers to the instance of the class (i.e., the object created from that class). When you create an instance using the new keyword, this inside the class methods refers to that instance.






// ### 1. **Objects**
// Objects are collections of properties and methods. A property is a key-value pair, and a method is a function that belongs to the object.

// Example:
//```javascript
let person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

console.log(person.fullName()); // "John Doe"


// ### 2. **Classes**
// In modern JavaScript (ES6+), you can use the `class` keyword to define a blueprint for creating objects. A class can have a constructor, methods, and properties.

// Example:
// ```javascript
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  fullName() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = new Person("John", "Doe");
console.log(person1.fullName()); // "John Doe"


// ### 3. **Inheritance**
// Inheritance allows one class to inherit the properties and methods of another. In JavaScript, this is done using the `extends` keyword.

// Example:
// ```javascript
class Employee extends Person {
  constructor(firstName, lastName, jobTitle) {
    super(firstName, lastName); // Calls the parent class's constructor
    this.jobTitle = jobTitle;
  }

  getJobTitle() {
    return this.jobTitle;
  }
}

const emp1 = new Employee("Jane", "Smith", "Developer");
console.log(emp1.fullName()); // "Jane Smith"
console.log(emp1.getJobTitle()); // "Developer"


// ### 4. **Encapsulation**
// Encapsulation is the concept of bundling data and methods that operate on that data into a single unit, or class. In JavaScript, we can use getter and setter methods to control access to properties.

// Example:
// ```javascript
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  get carDetails() {
    return `${this.make} ${this.model}`;
  }

  set carDetails(details) {
    [this.make, this.model] = details.split(" ");
  }
}

const car1 = new Car("Toyota", "Camry");
console.log(car1.carDetails); // "Toyota Camry"
car1.carDetails = "Honda Accord";
console.log(car1.carDetails); // "Honda Accord"


// ### 5. **Polymorphism**
// Polymorphism allows objects to be treated as instances of their parent class. It also allows methods in different classes to have the same name but behave differently.

// Example:
// ```javascript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

let dog = new Dog();
let cat = new Cat();

dog.speak(); // "Dog barks"
cat.speak(); // "Cat meows"


// ### 6. **Abstraction**
// Abstraction is the concept of hiding the complex implementation details and exposing only the necessary parts of an object or class. In JavaScript, this can be achieved using abstract classes or methods (although JS doesn't natively support abstract classes like some other languages).

// Example (simple abstraction through methods):
// ```javascript
class Shape {
  constructor() {
    if (this.constructor === Shape) {
      throw new Error("Cannot instantiate abstract class Shape");
    }
  }

  // Abstract method, should be implemented by subclasses
  area() {
    throw new Error("Method 'area()' must be implemented.");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.area()); // 78.54


// ### Summary of Key Concepts:
// - **Objects**: Collections of properties and methods.
// - **Classes**: Blueprints for creating objects with shared properties and methods.
// - **Inheritance**: Allows one class to inherit from another.
// - **Encapsulation**: Bundling data and methods, restricting direct access.
// - **Polymorphism**: Ability for different classes to use the same method name but with different behaviors.
// - **Abstraction**: Hiding complexity and exposing only necessary parts.

// Does that help clarify OOP in JavaScript for you? Would you like to dive deeper into any of these concepts?