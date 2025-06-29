// type coercion (== or ===)


// type coercion -> concept jismein aapka ek type automatically convert hojayega 

// "5"  +  1 - ye kaise possible hai ki number ko string mein kaise convert kar sakte hai 
//string number
// js bolta hai ye possible hai 

// ye lo 
// "5"  +  1
// '51' - toh kya js ne 1 ko string bana diya ha - 5 ko number kyo nahi banaya 
// agar aap ke operation mein oprands mein se ek bhi string nikal gaya toh js manta hai ki aap ko concate karna hai na ki additon thats why 1 converted to string "5" not to number

// "+" - mathematics mein "Additon" karta hai 
// "+" - programming mein kya karta hai "Additon" and "Concatination"(chipka dena)

// "5" - 1
// 4  
// ab aisa kyo ho raha hai 
// jab "-" sign ho toh vo sirf ek hi kaam kar sakt hai 

// truthy vs falsy values
if(12){
    
}
// tumhe  yaha pe true ya false likhna tha par tumne 12 likh diya 

// falsy values - 0 "" null undefined NaN document.all
// baki saari - true mein hogi  

// kaise pata karen ki koi value false hai ya true 
// !! kisi  bhi value ke aage ye do sign laga do 
//  !!0
// false
// !!false
// false
// !!null
// false
// !!undefined
// false
// !!NaN
// false
// !!document.all
// false

// #.question
// if(!!null){
//     console.log("hello");
// }else{
//     console.log('else chala');
// }

