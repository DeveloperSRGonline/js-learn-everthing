// introduction to array 
// other language mein array same type ki values ko hold karta hai lekin js mein array different type ki values ko bhi hold kar sakta hai - basically its dynamic type ka hota hai 

let marks = [10,43,64,65]// yaha kya ho raha hai single variable can hold multiple values 
// app marks kaise ginoge total no of marks hai 4 lekin jab hum unke ki ginti ya aisa bole ki unki position ko ginna 0 se start karte hai 0 , 1, 2 ,3 
// agar tum marks[1] toh 43 mil jayega lekin agar tum marks[12] jo ki nahi hai toh ye error dega 

// how to create an array 
// let arr = [] - thats it


// how to access the value 
// arr[1] 

// how to modify the value
// arr[1] = 12


// methods - .kuch() - ise hum method kahete hai 

// M.1 - push()
// arr.push(200)  -- last mein value add karta hai 

// M.2 - shift()
// arr.shift() - starting se value hata deta hai 

// M.3 - unshift(12)
// arr.unshift(12) - starting mein value add kar deta hai 

// M.4 - pop()
// arr.pop() - ye last se value hata deta hai 

// M.5 - splice 
// arr.splice(2,1) - ye kya karta hai bich se value hata deta hai 
// - pahela hai ki kaha se value hatani hai and dusra kitni value hata ni hai 

// M.6 - slice(2,1) - new array deta hai main array mein changes kare bina 
// arr.slice(2,1) - ye hata kar value deta hai 
// let newarr = arr.slice(2,1) - paheli value ki kaha se hatana hai and kaha tak hata na hai and do dusra index hai uske pahele tak hi hatata hai 

// let arr = [1,2,3,4,5]
// arr.reverse() // ye aap ke main array mein changes karke deta hai 

// sorting 
// let arr = [1,9,3,8,5]
// arr.sort() // ye aap ke array ko sort karte deta hai
// lekin sort hamesha function accept karta hai 
// arr.sort(function(a,b){
    // return a - b// agar a - b toh accending order mein 
    // agar b - a  -- toh decending order mein 
// })


