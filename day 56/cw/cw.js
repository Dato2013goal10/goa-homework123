function userInfo(e){
    e.preventDefault()

    let Form = document.getElementById("myForm")
    let x = Form.elements.name.value
    let p = Form.elements.surname.value
    let l = Form.elements.email.value
    let u = Form.elements.addres.value

    console.log(x,p,l,u)

    Form.reset()
}