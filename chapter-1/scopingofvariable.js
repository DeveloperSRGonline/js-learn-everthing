// scope (global, block , functional)

function abcd(){
    var a = 12; // ye pure function mein use ho sakta hai - function scope
}
var a = 12; // ye global scope

{
    let a = 12 // block scope 
    // let is block mein kahi bhi use ho sakta hai - iske respect karega 
}

// jab pura code baad mein chalega tab ye pura code funciton ke andar jata hai 

function xyz(){
    if(true){
        var c = 12;// ye variable is pure function mein accessable hai 
    }
}

// bhiaya hamein toh koi tension nahi hai jaha bhi braces hai usmein hi use hoga - jin braces mein banega unmein  use ho sakta hai

function a(){
    let a = 12;// ismein let banaya toh is pure function mein use ho sakta hai 
    if(true){
        let b = 12;// toh is pure if block mein use ho sakta hai 
    }
}

// global scope - pure code mein access 
// function scope - pure function mein kahi bhi access
// block - jaha bhi curly braces uske andar access kar sakte ho 