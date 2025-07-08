// Q1. print numbers from 1 to 10 using a for loop

// for(let i = 1 ; i<11;i++){
//     console.log(i);
// }

// Q2. print numbers from 10 to 1 using a while loop 

// let i = 10 
// while(i > 0){
//     console.log(i);
//     i--
// }

// Q3. print even numbers form 1 to 20 using a for loop 

// for(let i = 1;i<21;i++){
//     if(i % 2 === 0) console.log(i); 
// }

// Q4. print odd number form 1 to 15 using while loop

// let i = 1;
// while(i<16){
//     if(i % 2 === 1){
//         console.log(i);
//     }
//     i++ 
// }


// Q5. print the multiplication table of 5 (i.e., 5 x 1 = 5 ... 5 x 10 = 50)

// for(let i = 1;i<11;i++){
//     console.log(5 + " x " + i + " = " + 5 * i );
// }

// Q6. Find the sum of numbers from 1 to 100 using a loop.
// let sum = 0;
// for(let i = 1;i<101;i++){
//    sum = sum + i
// }

// console.log(sum);

// Q7. print all number from 1 to 50 that are divisible by 3.

// for(let i = 1;i<51;i++){
//     if(i%3 === 0) console.log(i);
// }

// Q8. ask the user for a number and print whether each number form 1 to that number is even or odd.

// let number = number(prompt('Enter a number'))

// for(let i = 1;i<= number;i++){
//     if(i%2 === 0) console.log(i + " number is even.");
//     else console.log(i + " number is odd.");
// }

// Q9 . count how many number between 1 to 100 are divisible by both 3 and 5.

// for(let i=1;i<101;i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(`${i} is divisible by both 3 and 5 `);
//     }else{
//         console.log(`${i} is not divisible by both 3 and 5`);
//     }
// }


// ---------------------------------------------

// Break and Continue

// Q1. stop at first multiple of 7

//write a loop from 1 to 100 that :
//    print each number 
//    stop completely when it finds the first number divisible by 7


// for(let i = 1;i<101;i++){
//     if(i%7 === 0){
//         break;
//     }
//     console.log(i);
// }

// if we want 7 bhi aa jaye toh 
// for(let i = 1;i<101;i++){
//     console.log(i);
//     if(i%7 === 0){
//         break;
//     }
// }



//Q2. skip Multiples of 3

//write a loop from 1 to 20 that : 
// that skips number divisible by 3
// print all others

// use continue

//Expected output : 
// 1 2 4 5 7 8 10 11 ....(no 3  6  9 , etc)
for(let i ;i<21;i++){
    if(i%3 === 0){
        continue
    }
    console.log(i);
}