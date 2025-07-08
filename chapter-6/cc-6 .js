// arrow vs regular functions : this context 
// olderversion mein funciton(){} ye exist 
// and newer mein ()=>{} ye exist karta hai 

// aap har jagah function ke jagah fat arrow function use kar sakte ho  sivay ek 

// jab bhi aap object baha rahe ho and usemein kuchh is tarike se 

// const obj = {
//     value : 42,
//     regular : function(){return this.value}, // yahe pe aap fat arrow function nahi use kar sakte 
//     arrow:()=> this.value
// };

// function ki hoisting kab hoti hai and temporal dead zone ka uspe kya impact aatah ia 

// greet() - works 
// function greet(){}

// greet() - error
// const greet = ()=>{} 

// higher order function and closure main difference kya hai 
// higher order function mein function return karta hai another function and in closures mein function return toh kartah hai and lekin main function mein jo bhi variable bane hai unko use karta hai 