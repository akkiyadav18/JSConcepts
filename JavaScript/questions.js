//fizzbuzz 

// for (i=1;i<=100;i++){
//     if(i%3==0){
//         console.log("Fizz")
//     }else if(i%5==0){
//         console.log("buzz")
//     }else if(i%3==0 && i%5==0){
//         console.log("FizzBuzz")
//     }else{
//         console.log(i)
//     }

// }

//reverse a string 

// let a ="akash"
// let b = " "
// for (i=a.length;i>=0;i--){
//     console.log(a[i])
//     b+=a[i];
// }
// console.log()

//factorial of number



// let result= 1;
// for (i=1; i<=5;i++){
//     result= result*i
// }
// console.log(result)


// let num=1 
// for(i=1; i<=5;i++){
//     num =num*i
// }

// console.log(num)


// let num="wqwqwqwqwqwwqw"
// let count=0
// for(i=0;i<num.length;i++){
//     if (num[i]=="a" ||num[i]=="o"||num[i]=="u" ||num[i]=="e"||num[i]=="i" ){
//         count=count+1
//     }
// }
// console.log(count)


// for(i=1; i<=100;i++){
//     let flag =0;
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             flag=1;
//         }
//     }

//     if (flag==0){
//         console.log(i," is prime")
//     }else{
//         console.log(i, " is not prime")
//     }

// }


// for(i=2; i<100;i++){
//     let num =i;
//     let flag =0; // by deafult we take num as prime
//     for(j=2;j<num;i++){

//         if(num%j==0){
//             console.log(num," is divisible by ",j);
//             flag=1;
//             break;
//         }
//         else{
//             console.log(num," is not divisible by ",j);
//         }
//     }

//     if (flag==0){
//         console.log(num," is prime")
//     }else{
//         console.log(num, " is not prime")
//     }
// }

// for (i=2; i<=100;i++){
//     let flag=0;
//     for (j=2;j<i;j++){
//         if(i%j==0){
//             flag=1
//             break;
//         }
        
//     }
//     if (flag==0){
//         console.log(i,  "is prime ")
//     }
    
// }


// for(i=2; i<=100; i++){
//     let flag=0
//     for (j=2;j<i; j++ ){
//         if(i%j==0){
//             flag=1
//             break;
//         }
//     }
//     if(flag==0){
//         console.log(i ,"is prime number")
//     }else{
//         console.log(i,"is not a  prime number ")
//     }
    
    
// }


// for (i=2;i<100;i++){
//     let flag=0
//     for(j=2;j<i;j++){
//         if(i%j==0){
//             flag=1
//             break;
//         }      
// }
// if(flag==0){
//     console.log(i," is prime number ")
// }
// }


// for(i=2; i<100;i++){
//     let flag=0
//     for(j=2; j<i;j++){
//         if(i%j==0){
//             flag=1
//             break
//         }
//     }
//     if(flag==0){
//         console.log(i)
//     }
// }



// for(i=2;i<100;i++){
//     let flag=0
//     for(j=2;j<i;j++){
//         if(i%j==0){
//         flag=1
//         break
//         }
//     }
//     if(flag==0){
//         console.log(i,"is a prime")
//     }
// }







//find the largest num in array
// let arr=[1, 722,55555, 88, 99 ]
// let count=arr[0]
// for(i=0; i<arr.length; i++){
//     if (arr[i]>count){
//         count=arr[i]

//     }
// }
// console.log(count)

// let series=0
// let num=1
// for (i=2; i<=10;i++){
//     nextnum=series+num
//     console.log(nextnum)


//     series=num
//     num=nextnum

// }


//array average 
//palindrome checker 

// let word ="racecar"
// let reversenum = "";
// for (i=word.length-1; i>=0; i--){
//     reversenum=reversenum+word[i]

// }

// if(reversenum==word){
//     console.log("word is palindrone word ")
// }else{
//     console.log("its not a palindrone word")
// }


// let palindrome =(a) =>{
//     let reversenum="";
//     for (i=a.length-1; i>=0; i--){
//         reversenum=reversenum+a[i]
    
//     }
    
//     if(reversenum==a){
//         console.log("word is palindrone word ")
//     }else{
//         console.log("its not a palindrone word")
//     }
// }

// palindrome("radar")


//array average 

// let a =[1,2,3,4,5,6]
// let b=0;
// for (i=0;i<a.length;i++){
//     b=b+a[i]

// }
// avg=b/a.length
// console.log(avg)

//perfect number is a positive number that is equal to the sum its proper divisor 

//sort an rray 

// let arr=[9,1, 5, 2, 1, 1]


// for(i=0;i<arr.length;i++){
//     for(j=i+1;j<arr.length;j++){
//        if(arr[i]>arr[j]){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp
//        }

//     }
    
// }
// console.log(arr)

//searchign whether and element is present or not in the array


//prime numbers 

// for(let i=2;i<100;i++){
//     let flag=0
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag=1
//             break
//         }
//     }
//     if(flag==0){
//         console.log(i)
//     }
// }

// let year =2002

// if(year%4==0 || year%400==0){
//     console.log("is a leap year")
// }else{
//     console.log("not a leap year")
// }


//sum of two number

// function sum(a,b){
//     return a+b
// }

// console.log(sum(2,5))

// let sum = (a,b) =>{
//     return a+b
// }

// console.log(sum(2,5))


//reverse an array
// let a=[5,4,3,2,1]
// let b=[]
// for (i=a.length-1; i>=0;i--){
    
//     b=b+a[i]
// }
// console.log(b)

// let result=1
// for(let i=5; i>=1;i--){
//     result=result*i    
// }
// console.log(result)


// function Person(name){
//     this.name=name

// }
// let obj= new Person("akash")
// console.log(obj.name)

// for(let i=1; i<=10;i++){
//     console.log("akash")

// }
// let i=1
// while( i<=10){
//     console.log("akash")
//     i++

// }
//let i=1
// do{
//     console.log("akash")
//     i++
// }while(i<=10)

// let Fname= new String("Akash ")
// console.log(Fname)

// let Fname="Akash"
// let Lname="Yadav"

// console.log(Fname.split())


// function reverseString(str){
//     let word= "";
//     for (i=str.length-1; i>=0; i--){
        
//         word=word+str[i]
        
//     }
//     console.log(word)
// }

// reverseString("hello")

//longest word in a sentence

// let sentence="my name is Akash"
// let longest = ""
// let Splitword=sentence.split(" ")    
// for (let i=0;i<Splitword.length;i++ ){    
//     if(Splitword[i].length>longest.length){
//         longest=Splitword[i]

//     }   
// }
// console.log(longest)
//prime number


// let arr =[1,2,3,4,5,6]
// let sum =7
// let returnarr=[]
// for(let i=0;i<=5;i++){
//     if(arr[0]+arr[i]==sum){
//         returnarr =arr[0] +","+ arr[i]

//     }
    
// }
// console.log(returnarr)




//reverse a number 

// let num= 987
// let answer=0 ;

//     while(num != 0){
//     //extracting the last digit
//     let digit = num%10;             //9
//     //removing the last digit from original number
//     num = parseInt(num/10)           //9856;
//     //adding the digit to the answer
//     answer = answer*10 + digit
// }

// console.log(answer)


class Human{
    //properties
    age=123;
    #wt=80;

    constructor(newAge, newHeight){
        this.newAge=newAge;
        this.newHeight=newHeight

    }
    //behaviour

    walking(){
        console.log("i am walking ", this.#wt)

    }
    running(){
        console.log("i am running")
    }
    get fetchweight(){
        return this.#wt
    }
    set modifyweight(val){
        this.#wt=val;

    }
}

let obj=new Human(22, 173)
console.log(obj.newAge)

obj.walking()