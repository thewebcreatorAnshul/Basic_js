let ispalying = true

while (ispalying) {
    let toguess = Math.floor(Math.random()* 1000)
    let attempts = Number(prompt("how many attempts...?"))
    guesslogic(toguess,attempts)
    ispalying = confirm("wanna play again..?")
    console.log(toguess);
    
}

function guesslogic(target,chances){
    while (chances != 0){
        let input = Number (prompt("you have " +  chances + 
            " chances \n\n enter your guess"))
        if (input != NaN){
            if (input == target){
                alert("congratulations you won🏆")
                return;
            } else if(input > target){
                alert("too high")
            }else if (input < target) {
                alert("too low")
            }else{
                return;
            }
        }else {
            return;
        }
        chances--
    }
    alert("chances over")
}