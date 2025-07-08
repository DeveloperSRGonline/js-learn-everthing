// map kya karta hai - map sirf tab use karna ha jab aap ek naya array banana chahte hai pichhle array ke data basis par 

let arr = [1,2,3,4,5]
// hamara array kitne members ka hai 5 toh map bhi 5 member ka blank array banayga and usmein function jo bole uske hisab se changes kar ke us blank array mein put karenge value 
// map dikhte hi saath ek blank array banalo 
let ans = arr.map(function(){ // ye ek array return karega toh use hum ans mein save kar lete hai 
    return 12; // agar humne kuchh return nahi kiya toh ye jitne element ke array mein sab element ke jagah undefined , undefined and undefined hi dega 
})


// kab map use kare 

// jab bhi aap ko aisa case dikh jaye jaha par ek array se naya array banega vo naya array kuchh values ko rakhega tab map lagega 

// paused on 6 : 42  paused time : 1 : 19 am 