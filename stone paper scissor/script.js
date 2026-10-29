let choices = ["stone","paper","scissor"]

do {
    let computer = Math.floor(Math.random()*3);
    
    let user = prompt("Enter number : \n 0 = stone \n 1 = paper \n 2 = scissor")

    if (user == null && user == NaN && user < 0 && user > 2) {
        alert("Invalid Input")
        break;
    }
    else if (user == computer) {
        alert("It's a Tie! \n Computer chose " + choices[computer] + " and You chose " + choices[user]);
        break;
    }
    else if ((user == 0 && computer == 2) || (user == 1 && computer == 0) || (user == 2 && computer == 1)) {
        alert("You Win! \n Computer chose " + choices[computer] + " and You chose " + choices[user]);
        break;
    }
    else {
        alert("Computer Wins! \n Computer chose " + choices[computer] + " and You chose " + choices[user]);
        break;
    }
}while (true);

