function checkBoolean(value) {
    return new Promise((resolve, reject) => {
        if (value === false) {
        resolve("success")
    } else {
        reject("failure")
        }
    })
}

const p1 = checkBoolean(false)
const p2 = checkBoolean(false)
const p3 = checkBoolean(false)

Promise.all([p1, p2, p3])
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })

