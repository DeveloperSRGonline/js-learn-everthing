// higher order function 

// yane aise function jo ki return karen ek function ye fir accept karen ek function apne parameter mein

// function abcd(val){// ye ek higher order function hai - kyo ki ye parameter mein ek function eccept kar raha hai 

// }

// abcd(function(){

// })

function abcd(){// ye function ek function return kar raha hai
    return function(){
        console.log('hello ');
    }
}

abcd()()