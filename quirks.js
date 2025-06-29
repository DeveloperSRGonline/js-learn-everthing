// dynamic typing -> js mein static typing nahi hai and yaha par dynamic typing hai jiska matlab hai aap data ko change kar sakte ho kyo ki yaha par dynamic data types hai 

let a = 12; // yaha par aap ne let bola hai data ka type nahi bataya hai abhi aapne number likha hai baad mein aap boolean bhi rakh sakte ho

a = true;
a = 'shivam'
a = []
a = null
a = undefined 
// yaha par baar baar a ki value badal rahi hai but a doesn't have problem 


// typeof quirks (e.g., typeof null === "object")

// typeof null
// 'object'😱

// typeof NaN - Not a Number
// 'number' heeyyy???😱

// NaN === NaN
// false ??? 😂

// 0.1 + 0.3 = 0.4
// 0.1 + 0.2 = 0.30000000000000004 

// [] + [] = ''
// 1 + "1" = 11

// 1 == "1"
// true
// 1 === "1"
// false