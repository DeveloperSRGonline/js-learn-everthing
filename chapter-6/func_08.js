// lexical scoping 
function abcd(){
    let a = 12;// is a ko tum abcd - function ke andar use kar sakte ho bahar nahi
    function defg(){
        let b = 13;// is b ko tum defg - function ke andar use kar sakte ho bahar nahi
        function ghij(){
            let c = 14;// is c ko tum ghij - function ke andar use kar sakte ho bahar nahi
        }
    }
}
// function ke andar function andar function ke andar function 

// lexical scoping yane unki physical position ka scope kya hai 

