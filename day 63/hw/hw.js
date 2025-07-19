let p = document.createElement("p")
p.textContent = "hello world!"

let body = document.body

body.appendChild(p)

let div = document.getElementById("div")

let h1 = document.createElement("h1")
h1.textContent = "my world!"

div.appendChild(h1)

let img = document.createElement("img")
img.src = "banana.png"

body.appendChild(img)

let button = document.createElement("button")
button.textContent = "click me"

body.appendChild(button)

let ul = document.createElement("ul")
let li0 = document.createElement("li")
let li1 = document.createElement("li")
let li2 = document.createElement("li")

li0.textContent = "hello"
li1.textContent = "world"
li2.textContent = "!"

ul.appendChild(li0)
ul.appendChild(li1)
ul.appendChild(li2)

body.appendChild(ul)