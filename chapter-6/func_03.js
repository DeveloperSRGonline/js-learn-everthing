// dafault , rest and spreed parameter

// function add(v1 = 0 , v2 = 0){ // here we put parameters valur defalut 0 
//     console.log(v1 + v2);
// }

// add()// in this case v1 + v2 = 0 - if dafault parameters present 
// add()// in this case v1 + v2 = NaN - if dafault parameters not present 

// ... - rest / spreed operator bolte hai - agar ye function ke parameter vale jagah lage toh ye rest operator hai and agar ye objects ya array mein lage toh ye spreed operator hai 

function add(...val){
    console.log(val);// output : [1,2,3,4,5,6,7,8,9]
}

add(1,2,3,4,5,6,7,8,9)