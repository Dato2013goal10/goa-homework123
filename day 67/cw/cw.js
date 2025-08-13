const previous = document.getElementById("previous")
const next = document.getElementById("next")

let image = document.getElementById("image")

index = 0

let images = ["html.png","css.png","js.png","py.png"]

function pictureMove(currIndex){
    index = currIndex

    if(currIndex >= images.length){
        index = 0
    }
    else if(currIndex < 0){
        index = images.length -1
    }
        image.src = images[index]
}

previous.addEventListener("click",function(){
    pictureMove(index + 1)
})
next.addEventListener("click",function(){
    pictureMove(index + 1)
})