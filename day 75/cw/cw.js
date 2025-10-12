((massive) => {
    for (let num of massive) {
        console.log(num * num);
    }
})([1, 2, 3, 4, 5]);

function greating(){
    let hello = "hi"
}

console.log(hello) // No

function Naxvadis(){
    const bye = "bye"
}

console.log(bye) // No

function madloba(){
    var thanks = "thank you"
}

console.log(thanks) // Yes

{
    let dabrZandit = "sit down"
}

console.log(abrdzandit) // No

{
    const abrdzandit = "sit up"
}

console.log(abrdzandit) // No

{
    var gabrdzandit = "get out"
}

console.log(gabrdzandit) // Yes

setInterval(() => {
    console.log("2");
}, 2000);

const func1 = () => {
    const myName = "David"
    const func2 = () => {
        console.log(myName)
    }

    func2()
}

func1()
