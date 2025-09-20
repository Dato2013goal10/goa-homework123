const div = document.getElementById("div-main")

let leftPosition = 0
let topPosition = 0

const myInterval = setInterval(move,1500)

function move(){
        leftPosition += 20 
        topPosition += 20

    div.style.left = leftPosition + "px"
    div.style.top = topPosition + "px"

    if(leftPosition >= 200 && topPosition >= 200){
        clearInterval(myInterval)

        div.style.backgroundColor = "green"
        div.style.width = 500 + "px"
        div.style.height = 500 + "px"
    }
}
