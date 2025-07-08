// closures -> ek func jo return kare ek aur function aur return hone wala function hamesha use karega function ka kio variable 

    
function abcd(){// ye function return kar raha hai ek aur function
    let a = 12;// the variable
    return function(){// ye returned huva function hai jo ki original function ke variable ki value use kar raha hai 
        console.log(a);// using the value
    }
}

