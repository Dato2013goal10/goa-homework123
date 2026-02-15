const returnPromise = bla => {
    return new Promise((reject,resolve) => {
        const num = Math.random()

        if(num < 0.5) reject("rejected")
            else resolve("succses")
    })
}

const asyncfunc = async () => {
    try{
        const xyz = await returnPromise()
        console.log(xyz)
    }
    catch(error) {
        console.log(error)
    }
}

asyncfunc()