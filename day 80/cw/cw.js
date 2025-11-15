const lower = "datuna zhamerashvili"
const lowername = "datuna"
const uppername = "DATUNA"
const lowersurname = "zhamerashvili"
const uppersurname = "ZHAMERASHVILI"

console.log(lower.startsWith(lowername || uppername))
console.log(lower.startsWith(lowersurname || uppersurname, 7))

const person = [{ name: "Datuna", surname: "Zhamerashvili", age: 1000}];
const activities = ["basketball", "programing", "listening to music"];
const numbers = [10, 25, 37, 42, 99];
const allData = person.concat(activities, numbers);
console.log(allData);

//discord will ban me if i say my real age