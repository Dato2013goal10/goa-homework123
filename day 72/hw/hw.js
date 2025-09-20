let box = document.getElementById("box")

let x = 0
let y = 0

let goRight = true
let goDown = false
let goLeft = false
let goUp = false

let size = 100

let step = 5

function move(){
    let maxX = innerWidth - size;
    let maxY = innerHeight - size;

    if(goRight === true){
        x = x + step;
        if(x >= maxX){
            x = maxX
            goRight = false
            goDown = true
        }
    }
    
    if(goDown === true){
        y = y + step;
        if(y >= maxY){
            y = maxY
            goDown = false
            goLeft = true
        }
    }

    if(goLeft === true){
        x = x - step;
        if(x <= 0){
            x = 0
            goUp = true
            goRight = false
        }
    }

    if(goUp === true){
        y = y - step;
        if(y <= 0){
            y = 0
            goUp = false
            goRight = true
        }
    }

    box.style.left = x + "px";
    box.style.top = y + "px";
}

setInterval(move,1)