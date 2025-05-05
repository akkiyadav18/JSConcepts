/*
# 1. Class Definition
class Car:
    # Constructor (initialization method)
    def __init__(self, model, color, speed=0):
        self.model = model    # Attribute: model
        self.color = color    # Attribute: color
        self.speed = speed    # Attribute: speed

    # Method: Accelerate
    def accelerate(self, increase):
        self.speed += increase
        print(f"Accelerating. Speed is now {self.speed} km/h.")

    # Method: Brake
    def brake(self, decrease):
        self.speed -= decrease
        if self.speed < 0:
            self.speed = 0
        print(f"Braking. Speed is now {self.speed} km/h.")

    # Method: Show car details
    def display_info(self):
        print(f"Car Model: {self.model}, Color: {self.color}, Speed: {self.speed} km/h")


# 2. Object Creation (Instantiation)
my_car = Car("Tesla Model 3", "Red", 50)  # Creating an object of the Car class

# Using class methods (demonstrates Polymorphism, Inheritance)
my_car.accelerate(20)  # Increase speed by 20 km/h
my_car.brake(10)       # Decrease speed by 10 km/h
my_car.display_info()  # Display car details


# 3. Inheritance Example
class ElectricCar(Car):  # Inheriting from the Car class
    def __init__(self, model, color, battery_life):
        super().__init__(model, color)  # Calling the parent constructor
        self.battery_life = battery_life  # New attribute for ElectricCar

    # Method Overriding (Override accelerate method)
    def accelerate(self, increase):
        self.speed += increase
        print(f"Electric car accelerating silently. Speed is now {self.speed} km/h.")

    # Additional method specific to ElectricCar
    def charge(self):
        print(f"Charging the {self.model} for {self.battery_life} hours.")


# 4. Creating an object of ElectricCar (demonstrates Inheritance and Polymorphism)
electric_car = ElectricCar("Tesla Model S", "Blue", 5)

electric_car.accelerate(30)  # Using overridden method
electric_car.charge()        # Charging method specific to ElectricCar
electric_car.display_info()  # Using inherited method


# 5. Abstraction: Hiding implementation details
from abc import ABC, abstractmethod

class Vehicle(ABC):
    @abstractmethod
    def start(self):
        pass

class Bike(Vehicle):
    def start(self):
        print("Starting the bike using the kickstart method.")

class Bus(Vehicle):
    def start(self):
        print("Starting the bus using the ignition key.")

# 6. Creating Objects of Bike and Bus
bike = Bike()
bus = Bus()

bike.start()  # Calls overridden start method of Bike
bus.start()   # Calls overridden start method of Bus





Explanation of the OOP Concepts:
Class & Object:

Car is a class that defines attributes (like model, color, speed) and methods (like accelerate(), brake(), and display_info()).
my_car is an object (instance) of the Car class.
Encapsulation:

The data (attributes like model, color, and speed) and methods (accelerate(), brake()) are encapsulated inside the Car class.
You can manipulate the car's attributes through the defined methods, providing controlled access to them.
Abstraction:

The Vehicle class is abstract, with an abstract method start(), meaning you can't create an instance of Vehicle directly. It's meant to be a template for other classes like Bike and Bus to implement their own version of start().
This hides the specific details of how the vehicle starts and only exposes the start() method to the outside world.
Inheritance:

The ElectricCar class inherits from the Car class, meaning it automatically has all the attributes and methods of Car but can also add its own specific attributes (battery_life) and methods (charge()).
The accelerate() method is overridden in ElectricCar, showing method overriding (a form of polymorphism).
Polymorphism:

Both Car and ElectricCar have an accelerate() method, but their behaviors are different. This is an example of polymorphism, where the same method name (accelerate()) behaves differently based on the object’s type.
The start() method in the Bike and Bus classes demonstrates polymorphism as well, where the same method name (start()) is implemented differently in each class.

*/
