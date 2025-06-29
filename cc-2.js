// why NaN is a number.
typeof NaN === 'number'// true
// js NaN ko ek failed number operation manti hai 
// failed mathematical operation hai - kyo failed operation numeric se aa raha hai - that is why uska type number hota hai 


// undefined vs null 

let x;
console.log(x);// undefined // by default milti hai agar value no do toh 
let y = null;
console.log(y);// null


// "5" + 1 // '51'
// "5" - 1 // 4

// if "+" - priority goes to making number ko string banana 
// if "-" - priority goes to making string ko number banana