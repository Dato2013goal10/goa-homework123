    function startsWithHello(sentence) {
        return sentence.startsWith("Hello");
    }
    
    function checkFile(name) {
        return name.startsWith("temp_") ? "Temporary file" : "Regular file";
    }
    
    function cleanInput(text) {
        return text.trim();
    }
    
    function isEmptyInput(text) {
        return text.trim() === "";
    }
    
    function mergeNumbers(arr1, arr2) {
        return arr1.concat(arr2);
    }
    
    function mergeStudents(class1, class2) {
        return class1.concat(class2);
    }
    
    function numberExists(arr, num) {
        return arr.includes(num);
    }
    
    function hasBlue(colors) {
        return colors.includes("blue");
    }
    
    function reverseNumbers(arr) {
        return arr.reverse();
    }
    
    function reverseUsers(users) {
        return users.reverse();
    }
    
    function printNumbers(arr) {
        arr.forEach(n => console.log(n));
    }
    
    function showPricesWithTax(prices) {
        prices.forEach(price => {
        console.log(price + price * 0.10);
        });
    }
    