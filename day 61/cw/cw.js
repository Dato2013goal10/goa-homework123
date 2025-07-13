let number = 0

while(number < 100){
    console.log(number)
    number = number + 1
}

function corectUserPassword(){
    let correctPassword = 998877665544332211
    let userInput = Number(prompt('enter your password'))
    let tri = 1;
    while(userInput !== correctPassword){
        alert("try again")
        userInput = Number(prompt('enter your password'))
        tri++
    }
}

corectUserPassword()