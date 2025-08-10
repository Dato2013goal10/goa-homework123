// let div = document.getElementById("main-div")

// let leftPos = 0

// function moveRight(){
//     leftPos += 50
//     div.style.left = leftPos + "px"
//     if (leftPos === 600)
//         clearInterval(interval)
// }

// let interval = setInterval(moveRight,1000)

// moveRight()

let increase = document.getElementById("increase")
let counter = document.getElementById("counter")

let count = 0

function plusOne(){
    count ++
    counter.textContent = count
}