// let p1 = prompt("prompt1: ");
// let p2 = prompt("prompt2: ");
// let p3 = prompt("prompt3: ");
// let p4 = prompt("prompt4: ");
// let p5 = prompt("prompt5: ");

// let result = p1.concat(" ", p2, " ", p3, " ", p4, " ", p5);

// console.log(result);

// let fullName = "dato zhamerashvili";
// let result = fullName.includes("dato".toUpperCase());
// console.log(result);


let word = prompt("word:");
let boolean = prompt("enter boolean:");

if (boolean === "true") {
    console.log(word.repeat(10));
} else if (boolean === "false") {
    console.log(word.repeat(5));
} else {
    console.log("u need to enter true or false! (lowercase)");
}
