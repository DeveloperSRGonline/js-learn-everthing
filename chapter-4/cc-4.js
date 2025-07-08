//fallthrough in switch-case
let x = 2;
switch (x){
    case 2:
        console.log('Two');
    case 3:
        console.log('Three');
}
// Output : two , three (bug if break is missing)