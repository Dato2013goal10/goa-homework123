function getInformation(e){
    e.preventDefault();
    alert("Form submitted!");

    let usernameInput = document.getElementById("username-input");
    let passwordInput = document.getElementById("password-input");
    let emailInput = document.getElementById("email-input");

    let username = usernameInput.value;
    let password = passwordInput.value;
    let email = emailInput.value;

    console.log(username);
    console.log(password);
    console.log(email);

    usernameInput.value = "";
    passwordInput.value = "";
    emailInput.value = "";
}
