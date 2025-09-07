    document.getElementById("loginForm").addEventListener("submit", function(e) {
        e.preventDefault();
    
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (email === "datucha2013jamera@gmail.com" && password === "password123") {
        alert("Signed in successfully!");
        error.style.display = "none";
        } else {
        error.style.display = "block";
        }

        console.log(email)
        console.log(password)
    });
    