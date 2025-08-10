let hello = document.getElementById("hello")
let bye = document.getElementById("bye")

let cloneHello = hello.cloneNode(true)
document.body.appendChild(cloneHello)

let cloneBye = bye.cloneNode(true)
document.body.appendChild(cloneBye)

let p = document.createElement("p")
p.textContent = "hello world"
document.body.appendChild(p)

let h1 = document.createElement("h1")
h1.textContent = "world"
document.body.appendChild(h1)