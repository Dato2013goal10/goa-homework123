// let btn = document.createElement("button")
// btn.textContent = "click me"

// let parent = document.getElementById("parent")
// let childP = document.getElementById("child")

// function replace(){
//     parent.replaceChild(btn,childP)
// }

// replace()

// let p = document.getElementById("hello")

// p.onmouseover = function(){
//     alert("an mouse over has occcured")
// }

let h2 = document.getElementById("hello2")

let count = 0

h2.onmouseout = function(){
    count++
    console.log(count)
}