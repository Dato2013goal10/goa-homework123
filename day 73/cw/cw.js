let emptyString = ""

do{
    emptyString += "m"
}while(emptyString.length < 20)

console.log(emptyString)

let student = {
    name: "David",
    age: 12,
    grade: "7th"
    };

    for (let key in student) {
    console.log(key + ": " + student[key]);
    }

    for (let i = 1; i <= 100; i++) {
            if (i % 5 === 0 && i % 7 === 0) {
        continue;
    }
    console.log(i);
}
