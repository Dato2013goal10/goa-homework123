// let p = document.getElementById("p-main")

// p.addEventListener("click",function(){
//     if(p.style.textAlign === "left"){
//         p.style.textAlign = "center"
//     }
//     else{
//         p.style.textAlign = "left"
//     }
// })


let h2 = document.getElementById("h2-main")

h2.addEventListener("pointerdown",function(e){
    if(e.target.style.fontSize === 30+"px"){
        e.target.style.fontSize = 20+"px"
    }
    else{
        e.target.style.fontSize = 30+"px"
    }
})