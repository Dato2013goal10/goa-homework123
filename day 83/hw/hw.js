let fruits1 = [];
fruits1.push("apple", "banana");

let nums1 = [1, 2];
nums1.push(3);

let colors1 = ["red", "green", "blue"];
let removedColor1 = colors1.pop();

let animals1 = ["dog", "cat", "lion", "tiger"];
animals1.pop();
animals1.pop();

let cities1 = ["Tbilisi", "Batumi", "Rustavi"];
let removedCity1 = cities1.shift();

let nums2 = [10, 20, 30, 40];
let removedNumA = nums2.shift();
let removedNumB = nums2.shift();

let animals2 = ["dog", "cat", "lion", "tiger", "fox"];
let firstTwoAnimals = animals2.slice(0, 2);

let nums3 = [5, 10, 15, 20, 25, 30];
let middleTwo = nums3.slice(2, 4);

let fruits2 = ["apple", "banana", "orange", "kiwi", "grape"];
let removedFruit2 = fruits2.splice(2, 1);

let colors2 = ["red", "green", "blue", "yellow"];
colors2.splice(1, 0, "purple");

let words1 = ["hello", "world", "chatGPT"];
let joinedWords1 = words1.join(" ");

let nums4 = [1, 2, 3, 4];
let joinedNums4 = nums4.join("-");

let nums5 = [42, 7, 13, 99, 1];
nums5.sort((a, b) => a - b);

let words2 = ["banana", "apple", "cherry", "date"];
words2.sort();
