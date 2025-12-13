// const Num = prompt("enter any number")
// alert(Math.floor(Num))
// alert(Math.ceil(Num))
// alert(Math.round(Num))
// alert(Math.abs(Num))

// let num = prompt("Num:");
// let floatNum = parseFloat(num);
// let whole = Math.trunc(floatNum);
// let result = Math.pow(floatNum, floatNum);

// console.log(floatNum);
// console.log(whole);
// console.log(result);

const num1 = parseFloat(prompt("Enter first decimal number:"));
const num2 = parseFloat(prompt("Enter second decimal number:"));

const truncatedPower = Math.trunc(Math.pow(num1, 3));
const flooredNumber = Math.floor(num2);
const minimum = Math.min(truncatedPower, flooredNumber);
const maximum = Math.max(truncatedPower, flooredNumber);

console.log("Truncated power:", truncatedPower);
console.log("Floored number:", flooredNumber);
console.log("Minimum:", minimum);
console.log("Maximum:", maximum);
