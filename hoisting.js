// var a = undefined;// declare wala part upper
// hoisting impact per type 

// hoisting -> ek variable ko jab js mein banate hai toh vo variable do hisso mein tut jata hai uska declare vala part upar chala jata hai and uska initialization wala part neeche reh jata hai 

// var a = 12; is ki vajah se 
// console.log(a);// jab hum is access karte hai toh ye error kyo nahi deta ye dekh rahe hai 
// line number 7 pe aap variable ko banne se bhi pahele kaise access kar pa rahe ho - kyo ki line number 7 divide hui do hisso mein 

// a = 12;// initialization wala part niche


// hoisting होइस्टिंग and hosting होस्टिंग dono alag hai 

// hoisting  - var let const tino mein hoti hai 
// let a = undefined;// a ban gaya 
console.log(a);// yaha tum bol rahe a ki value print karo 
a = 12;// initlalize toh line number 18 par hui hai 
// console.log(a) - ne error : ye bolta hai cannot access a before initialization - yaha ye nahi bol raha cannot access a before declaration 

//  a ka temporal dead zone hai line number 16 se 18 ke bich mein and tum vahi console.log(a) kar rahe ho 

//                 value
// var -> hoist -> undefined 
// let -> hoist -> x
// const -> hoist -> x