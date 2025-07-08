//  if else else-if
// switch case
// early return pattern

// if(condition -> true || false)
// if(true)
// if(false)
// if(condition){// agar ture to ye block
// }else {// agar false to ye block 
// }

// ye ladder ko kitna bhi bada sakte ho 

// if(loggedIn && isAdmin){

// }else if(loggedIn){

// }else{

// }




// switch(1){
//     case 1:
//         console.log('ye case 1 hai');
//         break;
//     case 2:
//         console.log('ye case 2 hai');
//         break;
//     case 3:
//         console.log("case 3 chal gaya shivam");
//         break;//kyo 
//     default:
//         break;
// }


// early return pattern 

// function getVal(val){
//     if(val<100) return 'A'
//     else if(val<75) return 'B'
//     else if(val<50) return 'C'
//     else return 'D'
// }

// let ans = getVal(45)
// console.log(ans);

// early return pattern 

function getVal(val){
    if(val < 25) return 'D'
    else if(val < 50) return 'C';
    else if(val < 75) return 'B'
    else return "A"
}

let ans = getVal(67)
console.log(ans);