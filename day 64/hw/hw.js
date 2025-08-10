let narrow = document.getElementById("narrow")
let crack = document.getElementById("crack")

let cloneNarrow = narrow.cloneNode(true)
document.body.appendChild(cloneNarrow)

let cloneCrack = crack.cloneNode(true)
document.body.appendChild(cloneCrack)

let p = document.createElement("p")
p.textContent = "hello world"
document.body.appendChild(p)

let h1 = document.createElement("h1")
h1.textContent = "world"
document.body.appendChild(h1)