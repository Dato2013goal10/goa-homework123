const numbers = [-5, -2, -1, 3, -9];
console.log(numbers.some(num => num > 0));

const words = ["apple", "car", "banana", "house"];
console.log(words.some(word => word.length < 4));

const tasks = [
    { title: "Clean room", completed: false },
    { title: "Do homework", completed: true },
    { title: "Exercise", completed: false }
];
console.log(tasks.some(task => task.completed));

const nums = [1, 5, 10, 3];
console.log(nums.every(num => num > 0));

const upperWords = ["HELLO", "WORLD", "JS"];
console.log(upperWords.every(word => word === word.toUpperCase()));

const users = [
    { age: 20 },
    { age: 25 },
    { age: 18 }
];
console.log(users.every(user => user.age >= 18));

const numbers2 = [1, 2, 3, 4];
console.log(numbers2.map(num => num * 2));

const words2 = ["Apple", "Banana", "Car"];
console.log(words2.map(word => word[0]));

const users2 = [
    { username: "Alex" },
    { username: "Mia" },
    { username: "John" }
];
console.log(users2.map(user => user.username));

const numbers3 = [1, 2, 3, 4, 5, 6];
console.log(numbers3.filter(num => num % 2 === 0));

const words3 = ["house", "car", "computer", "pen"];
console.log(words3.filter(word => word.length > 5));

const products = [
    { name: "Phone", inStock: true },
    { name: "Laptop", inStock: false },
    { name: "Tablet", inStock: true }
];
console.log(products.filter(product => product.inStock));
