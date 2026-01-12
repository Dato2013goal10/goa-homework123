    setTimeout(() => {
        console.log("Hello")
    }, 2000)
    
    setTimeout(() => {
        document.querySelector("p").textContent = "Text changed"
    }, 3000)
    
    setTimeout(() => {
        alert("Alert after page load")
    }, 3000)
    
    setTimeout(() => {
        console.log("Time’s up!")
    }, 5000)
    
    localStorage.setItem("username", "David")
    
    const savedUser = localStorage.getItem("username")
    document.body.innerHTML += savedUser
    
    localStorage.removeItem("username")
    
    localStorage.clear()
    