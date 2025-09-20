let numbers = [10, 21, 32, 43, 54, 65];

console.log("All elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

console.log("Index and elements:");
for (let i = 0; i < numbers.length; i++) {
    console.log("Index " + i + " -> " + numbers[i]);
}

console.log("Even numbers:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}

console.log("Odd numbers:");
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        console.log(numbers[i]);
    }
}

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
