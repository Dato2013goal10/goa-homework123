// const Nums = [1,2,3,4,5,6,7,8,9]
// console.log(Nums.some(num => num%2 == 0))
// console.log(Nums.every(num => num%2 == 0))

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num, index) => {
//     return `${num},${index}`;
// });
// console.log(result);

const numbers = [333, 1023, 25, 237, 4230, 1233, 5325, 2432, 52, 34];
console.log(numbers.filter(num => num % 5 === 0))