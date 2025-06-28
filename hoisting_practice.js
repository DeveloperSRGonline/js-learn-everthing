// console.log(nm);// undefined 
// var nm = "shivam"  

// var nm = undefined
// console.log(nm);
// nm = "shivam"
// kuch aisa huva hoga 
// so the output will be : "undefined"
// ---------------------------------------

// console.log(age);// cannot access age before initialization
// let age = 25;

// --------------------------
// var x = 1;
// {// yaha par koi function nahi hai toh ye pure code mein access ho sakta hai 
//     var x = 2;// yaha x reassign ho jayega 
// }
// console.log(x);

// kyoki var hamesha function scoped hota hai  

// --------------------

// let a = 10;// braces scoped // global
// {
//     let a = 20;
//     console.log("Inside : " , a)// a = 20
// }
// console.log("Outside : ",a);// a = 10

// ---------------------------
// confussion - 1 :
if(true){
    var a = 1;// kyo ki var function scoped hota hai ye if ki respect nahi karega and bahar leak ho jayega 
    let b = 2;// but let block scoped hota hai toh ye if ki respect karega 
}
console.log(a);// 1
console.log(b);// refrenceerror : b not defined

// --------------------------------

// confussion - 2 :
// why const alllows changing object properties
const person = {name : "harsh"};
person.name = "sharma";//allowed // andar ki value ko change kar rahe ho - basically updation that is allowed
person = {} // not allowed // reassigning which not allowed 