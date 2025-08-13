function checkEqual() {
    let a = 5, b = 5;
    console.log(a == b);
}

function checkGreater() {
    let a = 8, b = 5;
    console.log(a > b);
}

function checkLessEqual() {
    let a = 3, b = 5;
    console.log(a <= b);
}

function checkNotEqual() {
    let a = 4, b = 5;
    console.log(a != b);
}

function checkGreater100() {
    let a = 120;
    console.log(a >= 100);
}

console.log(confirm("Do you like JavaScript?"));

function confirmNow() {
    let result = confirm("Are you sure?");
    console.log(result);
}

let confirmResult = confirm("Do you want to see an alert?");
alert(confirmResult);

function submitForm(e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    console.log(username);
}

function clearEmail() {
    document.getElementById("email").value = "";
}

function alertPhone() {
    let phone = document.getElementById("phone").value;
    alert(phone);
}
