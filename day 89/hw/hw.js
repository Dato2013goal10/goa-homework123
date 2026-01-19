const MyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const students = [
            "nika",
            "nika",
            "gio",
            "dato",
            "aleqsandre"
        ]

        const randomStudent = students[Math.floor(Math.random() * students.length)]

        if (randomStudent.length > 5) {
            resolve("success")
        } else {
            reject("failure")
        }
    }, 5000)
})

MyPromise
    .then(result => console.log(result))
    .catch(error => console.log(error))
