// greet()
// function greet(){
//     console.log('Hello');
// }
// output : Hello!


// convert this function into arrow function 
// function multiply(a,b){
//     return a * b;
// }

// let multiply = (a,b)=>{
//    return a * b
// }


// Identify arguments and parameter
// function welcome(name){// yaha name ye parameter hai 
//     console.log(name);
// }
// welcome('Shivam')// yaha shivam ye argument hai 



// how many parametes this function have and how many arguments have passed 
// function demo(a,b,c){} - yaha a,b,c ye 3 parameters hai
//     demo(1,2) - yaha 1 , 2 ye do arguments hai 
// 1 jayega a mein 2 jayega b mein and c ke liye kuchh nahi toh c mein undefined aa jayega 


// predict the output 
// function sayHi(name = 'Guest'){
//     console.log("hi",name);
// }
// sayHi() - Output : hi Guest - will be the answer



// what does the ... operator mean in parameters?
// function abcd(...val){
//     console.log(val);// [1,2,3,4,5]
// }

// abcd(1,2,3,4,5)


// use rest parameter to accepts any number of scores and return the total.

// function getScore(...scores){
//     let total = 0
//     scores.forEach((val)=>{
//         total = total + val
//     })
//     return total
// }
// let totalScore = getScore(10,12,14,18)
// console.log(totalScore);


// fix this function using early return 

// function checkAge(age){
//     if(age < 18){
//         console.log("To young");
//     }else{
//         console.log("Allowed");
//     }
// }

// checkAge()

// function checkAge(age){
//     if(age < 18) return "Too Young!"
//     return "Allowed"
// }
// console.log(checkAge(23)) 


// what is the return value of this function 

// function abcd(){
//     return; - Output : undefined 
// }
// console.log(abcd());


// what do mean we say "function are first class sitizen" ?

// it means function can be treated as first class function 
// if you save 12 in variable so you can save function also in variable


//pass a function inside another function and excute it 

// function abcd(val){
//     val()//  yaha vo function aayega and usko hum call kar rahe hai 
// }
// abcd(function(){
//     console.log("hello");
// })

// what is higher order function?

// function abcd(){ // abcd is a higher order function 
//     return function(){

//     }
// }

// function abcd(val){ // abcd is higher order function it accepting function in parameter 
//     val()
// }

// abcd(function(){
//     console.log("Hello shivam");
// })


// identify it is higher order function or not 
// [1,2,3,4].map(function(x){// map is higher order function bacause it accepting function in its parameter 
//     return x * 2;
// })


//identify function is pure or inpure 

// let total = 0;
// function addTotal(num){// ye impure function hai kyo ki ye bahar ke variable ki value change kar raha hai 
//     total += num;
//}


// convert the above function into pure function 
// let total = 0;
// function addTotal(){
//     let newTotal = total;// ab ye function bahar ke variable ko change nahi kar raha hai 
//     newTotal += num;
// }


// what is closures and when it created 

// function abcd(){
//     let val = 0;
//     return function(val){
//         console.log(val);
//     }
// }// ye complete pitcure closure hai 
// ye tak create hota hai jab ek function return karta hai ek aur function and returned function original function ki value karta hai 



// function outer(){// outer ye closure hai 
//     let count = 0;
//     return function(){
//         count++
//         console.log(count);
//     }
// }
// const counter = outer()// ye outer ki jagah function aa jayega 
// counter()
// counter()
// Output : 1  2 


// convert this normal function into IFFE : 
// (function init(){
//     console.log("Initialized");
// })();// this is iffi now 

// what is the use of IFFE , name one real world use case 
// let shery = (function(){
//     let score = 0; 
//     return {
//         getScore: function(){
//             console.log(score);
//         },
//         setScore: function(val){
//             score = val;
//         }
//     }
// })()

// what will be the output of this code and why ?
// greet(); - you will get an error because greet is not declaration its a expression

// var greet = function(){
//     console.log('Hi!');
// }


// what will be output and why ?

greet()// this time it is declaration so it will 

function greet(){
    console.log("Hi!");
}