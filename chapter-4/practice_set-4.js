// write a function getGrade(score) that:
// . Takes a student's mark(0 to 100)
// . Return the grade based on this logic:
// 90-100 A+
// 80-89 A
// 70-79 B
// 60-69 C
// 33-59 D
// 0-32 Fail
// Anything else      Invalid marks❌

function getGrade(score){
    if(score >=0 && score <= 32) return 'Fail'
    if(score >= 33 && score <= 59) return 'D'
    if(score >= 60 && score <= 69) return 'c'
    if(score >= 70 && score <= 79) return 'B'
    if(score >= 80 && score <= 89) return 'A'
    if(score >= 90 && score <= 100) return 'A+'
    return 'Invalid marks❌'
    
}

let grade = getGrade(12242)
console.log(grade);


//Rock paper scissors logic


function rps(user,computer){
if(user === computer) return "It's a draw!";
if(
    (user === "rock" && computer === "scissor") ||
    (user === "scissor" && computer === "paper") ||
    (user === "paper" && computer === "rock")
) return 'Winner : user 🎉';
if(
    (computer === "rock" && user === "scissor") ||
    (computer === "scissor" && user === "paper") ||
    (computer === "paper" && user === "rock")
) return 'Winner : computer 🎉';
return "Invalid input!";
   
}

rps('rock','scissor')



