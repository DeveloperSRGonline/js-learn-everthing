// let x = 10;
// let y = 20;

// if(x>5 && y<25){
//     console.log('A');
// }else{
//     console.log('B');
// }

// Output : A


// let isAdmin = true;
// let isLoggedIn = false;
// if(isAdmin || isLoggedIn){
//     console.log('Access granted');
// }else{
//     console.log('Access denied');
// }
// Output : Access granted 


// let temp = 35;

// if(!(temp < 30)){
//     console.log('Hot');
// }else{
//     console.log('Pleasant');
// }
// Output : Hot


// let a = 0;

// if(a){
//     console.log("Truthy");
// }else{
//     console.log("Falsy");
// }
// Output : Falsy 


// let score = 78;
// let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

// console.log(grade);
// Output : B


// let points = 120;
// let status = points > 100 ? "Gold" : points > 50 ? "Silver" : "Bronze"
// console.log(status);

// Output : Gold 



// let loggedIn = true;
// let hasToken = false;

// let access = loggedIn && hasToken ? "Allow" : "Deny"

// console.log(access);
// Output : Deny


// let a = 5;
// a++
// console.log(a);
// Output : 6 

let x = 3;
let y = x++
console.log(x,y);
// Output : 4 3


let p = 4;
let q = ++p;
console.log(p,q);
//Output :  5,5


let m = 10;
console.log(m--);// Output : 10
console.log(m);// Output : 9


let n = 5;
let result = n++ + ++n;// 5 + 7
console.log(result);
// Output : 12


let likes = 100;

function likePost(){
    return ++likes;
}

console.log(likePost());// 101 
console.log(likes);// 101


let count = 5;

if(count-- == 5){
    console.log('Matched');
}else{
    console.log('Not matched');
}