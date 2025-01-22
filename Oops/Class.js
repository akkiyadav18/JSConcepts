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