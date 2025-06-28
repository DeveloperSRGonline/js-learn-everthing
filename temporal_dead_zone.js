// temporal dead zone  

console.log(a);// line number 3 mein a ki value maan rahe kya a abhi exist karta hai nahi 
// error - a is not defined - a hai hi nahi 

let a = 12;// ab error : cannot access a before initialization

// js ye nahi bol rahi ki a is not defined vo ye bol raha hai ki a baad mein define kiya hai aap pahele use nahi kar sakte - matlab line number 3 ko pata hai ki line number 6 par a hai 
// par code toh line by line chalta hai - Heyyy ???

// TDZ - kya hai utna area jine mein ja ko pata toh hai ki varable exist karta hai par vo aap ko value nahi de sakta 
// variable banne ke upper jita bhi space hai vo us variable ka temporal dead zone hai 

// let mein hota hai , const mein hota hai 
// var mein nahi hota 

console.log(b);
// var  ko aapne banaya line number 20 par use kar rahe ho line number 17 par and var is completely ok with it - error nahi aake undefined aa raha hai - due to hoisting  

var b = 12;