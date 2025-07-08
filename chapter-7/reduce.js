// filter bhi ek naya array banata hai aap ke purane array se kuchh member leta hai and kuchh ko chhooood deta hai 


let arr = [1,2,3,4,5,6,7,8,9]

let newarr = arr.filter(function(val){   
    if(val > 4) return true
})
// Output : [5,6,7,8,9]
// jab map tha toh jo return kar the vo chale jate tha and jab filter hai toh true ya false return karte ho agar true return kiya toh jo value aaithi vo value chali jayegi and false likh diya toh nahi jayegi 

// stoped on 6 : 43 time 1 : 28 am