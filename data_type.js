// data types
// data ka type

// 12 shivam true [] {} () null undefined NaN symbol bigInt

// primitive -> aisi saari values jinko copy karne par tumhe ek real copy mil jaye
// reference -> inko copy karne par real copy nahi milegi but appko referance milega parent ka

// string , number ,boolean,null ,undefined , symbol , biInt  - primitive 
// array , object , function - referance value 

// male function 

// let a = __; - ye yato primitive hogi ya to referance 

// let a = 12;--> in this example this is number (primitive ) 
// let a = 12;// a ki value bhi 12  
// let b = a;// b ki value bhi 12 hai 

// a = a + 2; // toh baat ye hai ki agar value primitive hai to use hum directly copy kar sakte hai 

// array , object , function
// []       {}      ()  - - jaha aap ko ye diky and vo referance hai inko aap directly copy nahi kar sakte 

// let a = [1,2,3]
// let b = a; // appko lage ye ho toh gaya copy agar b mein chages karoge toh a mein change hoga 

// b
// (3) [1, 2, 3]
// a
// (3) [1, 2, 3]

// b.pop() 
// b
// (2) [1, 2]
// a
// (2) [1, 2]



// string , number ,boolean,null ,undefined , symbol , biInt 
// array , object , function

// #.string
// '' - single quotes
// "" - double quotes
// `` - backticks
// agar aap ki value string hai toh aap in tin mein se ki ek se wrap karoge 
// eg. 'shivam' "shivam" `shivam`


// #.number
// 12 - integer - number 
// 12.3 - integer - number


// #.boolean - true or false
// let a = true;
// let b = false;


//#.null 
// null ka matlab hai aapne jaan bujh kar koi value nahi di

// let selectedStudent = null - aap ne kisi student ko select nahi kiya toh abhi ke liye null - value absent

// #.undefined
// undefined matlab aap ne ek variable banaya par aap ne use value nahi di toh jo value by default mili vo hai "undefined"

// let a; - kya aapne ise value di hai - nahi , par by defalut is kuchh value mili hogi 
// - by defalut value undefined 
// let a;

// undefined - js engine deta hai - ye value milti hai 
// null - app khud se dete ho 


// #.symbol -> unique immutable value create karta hai 

// future mein hum koi libraries use karenge ab is case mein un libraries mein kai baar kuchh fields hoti hai jinse similar hum bhi baha dete hai aur galti se hamari banai hui field un original fields ko change kar dete hai 

// let sheryjs = {
//     uid:12,
//     model:"shivam"
// }

// sheryjs.uid = 1; - it will overite 

// let u1 = Symbol("uid")
// let u2 = Symbol("uid")
// u1 === u2
// false

// let obj = {
//     uid : 1,
//     name : 'shivam',
//     age : 12,
//     email : 'test@text.com'
// }

// let u1 = Symbol("uid")
// obj[u1] = "001";


// #.bigInt
// let a = 234802380810808109389838n;

// let a = [1,2,3] "=" baad agar [] {} () in tino mein se koi bhi 
// let b = a;// referance type 

// b.pop() - b se bhi hat jayega and a se bhi hat jayega 

// let a = {
//     name : "harsh"
// }

// let b = a 
 
// b.name = "harshita"