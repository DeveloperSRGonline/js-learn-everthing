// write a BMI calculator 

// function BMI(weight,height){
//     return weight / (height*height)
// }

// console.log(BMI(50,1.7));


// reusable discount calculator 

// function discountCalculator(discount){
//     return function(price){
//         return price - price * (discount/100)
//     }
// }

// let ten = discountCalculator(10)
// let twenty = discountCalculator(20)

// console.log(ten(200));
// console.log(twenty(200));


// function counter(){
//     let count = 0;
//     return function(){
//         count++
//         return count
//     }
// }
// let c = counter()
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());
// console.log(c());

// let d = counter()
// console.log(d());

// create a function to transform a value
// function double(val){
//     return val * 2;
// }

// console.log(double(5));


// use IFFE to isolate the variable 

// (function(){
//     const password = "secret password"
//     console.log(password);
// })()

// console.log(password);// ise aap bahar access nahi kar sakte password ye private variable hai 
// basically iffe se app private variable bana sakte ho 