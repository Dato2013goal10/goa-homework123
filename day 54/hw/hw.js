function userInfo(){
    let hobby = prompt("what is favourite hobby")
    alert(hobby)
}

userInfo()


function userNameSurname(){
    let firstName = prompt("whats your first name?")
    let lastName = prompt("whats your last name?")
    alert(firstName + " "+lastName)
}

userNameSurname()

function message(){
    let x = document.get
    let y = prompt("send a message")
    x.textContent = y
}

message()

function emoji(){
    let favouriteEmoji = prompt("whats your favourite emoji?")
    alert(favouriteEmoji +""+"thank you for this information")
}

emoji()

    function title(){
        let Title = prompt("enter this websites title")
        document.title = Title
}

title()

function writeInfo(e){
    e.preventDefault()

    let K = document.getElementById("text")
    alert(K.value)
}

function colorChange(e){
    e.preventDefault()

    let favouriteColor = document.getElementById("coloring").value
    document.body.style.backgroundColor = favouriteColor
}

function FirstNLastName(e){
    e.preventDefault()

    let p = document.getElementById("FName").value
    let q = document.getElementById("LName").value
    let i = document.getElementById("FNameNLName")
    let FullName = p +" "+ q
    i.textContent = FullName
}