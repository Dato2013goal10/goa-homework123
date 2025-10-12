let multiply = (a,b)=>a*b

setInterval(()=>console.log("hi every 2s"),2000)

document.getElementById("myButton").addEventListener("click",()=>alert("clicked"))

(()=>console.log("Hello, world!"))()

((n)=>console.log(n*n))(5)

((arr)=>console.log(arr.reduce((a,b)=>a+b,0)))([1,2,3,4,5])
