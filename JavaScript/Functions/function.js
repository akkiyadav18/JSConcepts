// //function  definition
// function sayMyName(){
//     console.log("hi")
// }
// //functions call
// sayMyName();


// function counting(){
//     for(i=1;i<=100;i++){
//         console.log(i)
//     }
// }

// counting();


// function avg(a, b){
//     avg=(a+b)/2
//     console.log(avg)  

// }

// let realavg=avg(8, 2)
// console.log(realavg)

// function avg(a,b){
    
//     return  value=(a+b)/2;
//     //unreachable statement 
//     let x=10
//     console.log(x)
// }

//console.log(avg(8,2))

// let get=function(a,b){
//     sum=a+b
//     console.log(sum)
// }

// get(2,20)

//arrow function



// function printNumber(){
//     for (i=1; i<=100; i++)
//         console.log(i)
// }

// printNumber();

//sum of 2 numbers 

// function sum(a,b){
//     return a+b;

// }
// let value =sum(2,5);
// console.log(value)


// function evenOrOdd(a){
//     if(a%2==0){
//         console.log("number is even")
//     }
//     else{
//         console.log("number is odd")
//     }
// }

// evenOrOdd(2);
// evenOrOdd(4)

// let arrayNUm=[10,88, 99, 125, 4]
// let largestNum=arrayNUm[0]
// function maxNumber(){
//     for(i=1; i<=arrayNUm.length;i++){
//         if(arrayNUm[i]>largestNum){
//             largestNum=arrayNUm[i]
//         }
        
//     }
//     console.log(largestNum)
// }
// maxNumber();

//arrow functions 

// let functionS = (name)=>{
//     console.log(`${name}, hi`)

// }

// functionS('akash')

// let add=(a,b)=>{return a+b}

// console.log(add(22,3))

// let add =function(a,b){
//     return a+b
// }
// console.log(add(22,3))

//anonymous functions

// let a=function(a,b){
//     return a+b
// }

// console.log(a(2,8))

// //hoisting 
// console.log(d)
// const d=8

// function showThis() {
//     console.log(this); // Output: Window {...}
// }
// showThis();


// class Akash{
//     //properties/state
//     #wt=80
//     ht=180
//     clr='white'


//     constructor(name, height){
//         this.name=name;
//         this.height=height

//     }

//     //behavious
//     walking(){
//         console.log("i am walking ", this.#wt)

//     }
//     runnig(){
//         console.log("i am running")

//     }
//     get weight(){
//         return this.#wt
//     }
// }

// // obj= new Akash('vikas', 20);
// // console.log(obj.name)
// // //obj.weight()

// obj2= new Akash('mohit', 30);
// console.log(obj2.name)

// class Student{
//     constructor(name, grade){
//         this.name=name;
//         this.grade=grade;
//     }
     
//     getdetails(){
//         return this.name + " "+ this.grade
//     }
// }

// let student1= new Student("akash", "A++++")
// console.log(student1.getdetails());
// let student2= new Student("Mohit", "A------")
// console.log(student2.getdetails())


// class Rectangle{
//     constructor(width, height){
//         this.width=width
//         this.height=height
//     }


//     area(){
//     return  this.width* this.height
    
//     }

// }

// area1= new Rectangle(2, 8);
// console.log(area1.area())

// let len=[0,1,2]
// console.log(len[0])

// class Animal{
//     constructor(name, speak){
//         this.name=name
//         this.speak=speak
//     }
//     getname(){
//         return this.name
//     }
//     getspeak(){
//         console.log(`${this.name}, voice `)
//     }
// }

// // let ani =new Animal("mohit ", "hi")

// // console.log(ani.getspeak())

// class Dog extends Animal{
//     constructor(name, speak){
//         super(name, speak)
        
//     }

//     spea(){
//         super.getspeak()
//         console.log("barks")
//     }

// }

// let dog =new Dog("daisy")
// dog.spea();




// class vehicle{
//     constructor(type){
//         this.type=type
//     }

//     describe(){
//         console.log("this is vehicle")
//     }

// } 

// class Car extends vehicle{
//     constructor(type){
//         super(type)
//     }
//     Gaadi(){
//         super.describe()
//     }
// }

// let car = new Car("honda")
// car.Gaadi()


// class Person{
//     constructor(firstName, lastName){
//         this.firstName=firstName
//         this.lastName=lastName
//     }
//     getFullName(){
//         return this.firstName +" "+this.lastName
//     }
// }

// class Emplyee extends Person{
//     constructor(firstName, lastName, jobtitle){
//         super(firstName, lastName)
//         this.jobtitle=jobtitle
//     }
//     getdetails(){
        
//         return   this.getFullName() +" "+this.jobtitle
//     }
// }

// let employee = new Emplyee("akas", 'yadav',"QA" )
// console.log(employee.getdetails())


