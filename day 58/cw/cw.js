// let x = prompt("enter a number")
// console.log(x)
// console.log(typeof x)

// let La = Number(x)
// console.log(La)
// console.log(typeof La)

// function discountFunc(){
//     let age = Number(prompt("how old are you"))

//     if (age < 18){
//         console.log("20%")
//     }

//     else if (age < 68){
//         console.log("5%")
//     }

//     else{
//         console.log("10%")
//     }
// }


function compareNums(){
    x = prompt("enter a number")
    y = prompt("enter a number")
    if (x > y){
        console.log(x)
    }

    else if (y > x){
        console.log("y")
    }

    else{
        console.log("numbers are equal")
    } 
}

compareNums()