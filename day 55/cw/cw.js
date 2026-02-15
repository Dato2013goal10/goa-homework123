function text(e){
    e.preventDefault()

    let l = document.getElementById("message").value
    let u = document.getElementById("h1")
    u.textcontent = l
}

function color(e){
    e.preventDefault()

    let w = document.getElementById("ColorFav").value
    let u = document.getElementById("h1")
    u.style.color = w
}