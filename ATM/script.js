let balance = 1000;
let banking = false

do {
    let UserChoice = prompt('welcome to mini ATM\n\nchoose OPTIONS below!\n\na) Check Balance \nb) Withdraw Money \nc) Deposit Money \nd) Exit')
    switch (UserChoice) {
        case "a":
            alert("Your current balance is :"+ balance)
            break;
        case "b":
            Withdraw();
            break;
        case "c":
            deposit();
            break;
        case "d":
            alert("Thank you for using our service!")
            break;
        default :
            alert("invalid input...!!!")
            break;
    }
    ContinueConfirm()
}while(banking)

function Withdraw() {
    let ammount = Number(prompt("eneter Amount to withdraw:"))
        if (ammount<=balance) {
            balance -= ammount
            alert(ammount + " rupees Deducted from your account!\n\n Remaining balance is :" +balance)
        }else if (ammount > balance) {
            alert("aukat mat bhul bhadve")
        }
        else {
            alert("invalid input")
        } 
}

function deposit() {
    let ammount = Number(prompt("enter ammount to be deposit :"))
    if (0 < ammount < 10000){
        balance += ammount
        alert (ammount + " credited to your account! \n\ now your current balance is : " + balance)
    }else if (ammount > 10000){
        alert ("kaha se aya itna paisa bhadu...")
    }
    else {
        alert("invalid input")
    } 
}

function ContinueConfirm(){
    banking = confirm("would you like to use again...?")
    if(!banking) {
        alert("banking cancelled!!!!")
    } 
}
overlimit = ()=>{
    if(balance>100000)
        alert("cbi is coming and your wife will moan")
}
overlimit()