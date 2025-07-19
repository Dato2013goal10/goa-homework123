// let div = document.getElementById("div-main")

// let paragraph = document.createElement("p")
// paragraph.textContent = "Hello"
// div.appendChild(paragraph)

let sec = document.getElementById("section-main")

// let h2 = document.createElement("h2")

// sec.appendChild(h2)

// let txt = document.createTextNode("hello world")

// h2.appendChild(txt)

// h2.style.color = "green"

function smth(){
    let div = document.createElement("div")
    let p = document.createElement("p")
    p.textContent = "hello world"
    div.appendChild(p)
    div.style.color = "black"
    div.style.backgroundColor = "blue"
    sec.appendChild(div)
}