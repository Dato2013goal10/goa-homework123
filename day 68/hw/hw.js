// let div = document.getElementById("main")
// let p = document.getElementById("hi")

// div.removeChild(p)

// let ul = document.getElementById("ul")
// let h = document.getElementById("!")

// ul.removeChild(h)

let div = document.getElementById("textContainer")
let text = document.getElementById("text")

let newText = document.createElement("p")
newText.textContent = "new text"

div.replaceChild(newText,text)