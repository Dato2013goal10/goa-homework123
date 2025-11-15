let num1 = prompt("1st number:");
let num2 = prompt("2nd number:");
let num3 = prompt("3rd number:");
let num4 = prompt("4th number:");

let answers = num1 + " + " + num2 + " + " + num3 + " + " + num4

let result = eval(answers);

console.log("result: " + result);
alert("result: " + result);

(() => console.log("David Zhamerashvili"))();

(() => {
    const fullName = "David Zhamerashivili";
    console.log(fullName);
})();
