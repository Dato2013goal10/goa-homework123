    function countToFive() {
        let count = 1;
        while (count <= 5) {
        console.log(count);
        count++;
        }
    }
    
    function showMessage() {
        let count = 0;
        while (count < 5) {
        console.log("Hello, this is a message!");
        count++;
        }
        console.log("Stopped after 10 seconds");
    }
    
    function changeBackground() {
        let colors = ["red", "blue", "green", "orange", "purple"];
        let i = 0;
        while (i < colors.length) {
        document.body.style.backgroundColor = colors[i];
        console.log("Changed to:", colors[i]);
        i++;
        }
    }
    
    function startTimer() {
        let sec = 1;
        while (sec <= 10) {
        console.log(sec);
        sec++;
        }
        console.log("Timer stopped");
    }
    function arraySecondElement() {
        let numbers = [10, 20, 30, 40];
        console.log(numbers[1]);
    }
    
    function changeFirstElement() {
        let nums = [5, 15, 25, 35];
        nums[0] = 100;
        console.log(nums);
    }
    
    function logStrings() {
        let fruits = ["apple", "banana", "cherry"];
        console.log(fruits[0]);
        console.log(fruits[1]);
        console.log(fruits[2]);
    }
    
    function sumFirstLast() {
        let values = [2, 4, 6, 8, 10];
        let sum = values[0] + values[values.length - 1];
        console.log(sum);
    }
    
    arraySecondElement();
    changeFirstElement();
    logStrings();
    sumFirstLast();
    countToFive();
    showMessage();
    changeBackground();
    startTimer();
    
