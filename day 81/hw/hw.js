// 2
const nums1 = [4, -2, 7, -5, 9];
const firstNegativeIndex = nums1.findIndex(n => n < 0);
console.log(firstNegativeIndex);

// 3
const users1 = [
    { name: "Ana", age: 15 },
    { name: "Gio", age: 17 },
    { name: "Luka", age: 18 },
];
const firstAdultIndex = users1.findIndex(u => u.age >= 18);
console.log(firstAdultIndex);

// 4
const nums2 = [3, -1, 6, -4, 10];
const lastNegativeIndex = nums2.findLastIndex(n => n < 0);
console.log(lastNegativeIndex);

// 5
const users2 = [
    { name: "Nika", age: 12 },
    { name: "Megi", age: 22 },
    { name: "Saba", age: 18 },
];
const lastAdultIndex = users2.findLastIndex(u => u.age >= 18);
console.log(lastAdultIndex);

// 6
const nums3 = [3, 7, 5, 8, 11];
const firstEven = nums3.find(n => n % 2 === 0);
console.log(firstEven);

// 7
const products1 = [
    { id: 1, price: 80 },
    { id: 2, price: 120 },
    { id: 3, price: 95 },
];
const firstExpensive = products1.find(p => p.price > 100);
console.log(firstExpensive);

// 8
const nums4 = [2, 9, 11, 14, 7];
const lastEven = nums4.findLast(n => n % 2 === 0);
console.log(lastEven);

// 9
const products2 = [
  { id: 1, price: 50 },
  { id: 2, price: 200 },
  { id: 3, price: 150 },
];
const lastExpensive = products2.findLast(p => p.price > 100);
console.log(lastExpensive);

// 10
const colors = ["red", "blue", "green", "yellow"];
const blueIndex = colors.indexOf("blue");
console.log(blueIndex);

// 11
const nums5 = [5, 3, 7, 5, 9];
const firstFiveIndex = nums5.indexOf(5);
console.log(firstFiveIndex);

// 12
const fruits = ["apple", "banana", "apple", "kiwi"];
const lastAppleIndex = fruits.lastIndexOf("apple");
console.log(lastAppleIndex);

// 13
const nums6 = [10, 3, 10, 7, 10];
const lastTenIndex = nums6.lastIndexOf(10);
console.log(lastTenIndex);
