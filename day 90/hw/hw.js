    // ===============================
    // TASK 3
    // Promise with .then() and .catch()
    // ===============================

    const asyncOperation = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve("Data loaded successfully!");
        // To test error, replace resolve with:
        // reject("Failed to load data!");
        }, 1000);
    });
    
    asyncOperation
        .then((result) => {
        console.log("TASK 3 Success:", result);
        // Use the result (for example: display data in UI)
        })
        .catch((error) => {
        console.error("TASK 3 Error:", error);
        // Log error or show message to user
        });
    
    
    // ===============================
    // TASK 4
    // Promise chaining with multiple .then()
    // ===============================
    
    const chainPromise = new Promise((resolve) => {
        resolve(5);
    });
    
    chainPromise
        .then((value) => {
        console.log("TASK 4 Step 1:", value);
        return value * 2;
        })
        .then((value) => {
        console.log("TASK 4 Step 2:", value);
        return value + 10;
        })
        .then((value) => {
        console.log("TASK 4 Final Result:", value);
        });
    
    
    // ===============================
    // TASK 5
    // Promise with two callbacks in .then()
    // (No .catch())
    // ===============================
    
    const conditionalPromise = new Promise((resolve, reject) => {
        const success = true; // Change to false to test rejection
    
        setTimeout(() => {
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Something went wrong!");
        }
        }, 1000);
    });
    
    conditionalPromise.then(
        (result) => {
        console.log("TASK 5 Success:", result);
        // On success: continue app logic
        },
        (error) => {
        console.error("TASK 5 Failure:", error);
        // Handle error inside second callback
        }
    );
    
    
    // ===============================
    // TASK 6
    // Promise with .then(), .catch(), and .finally()
    // ===============================
    
    const fullPromise = new Promise((resolve, reject) => {
        const isSuccessful = true; // Change to false to test error
    
        setTimeout(() => {
        if (isSuccessful) {
            resolve("Async task finished!");
        } else {
            reject("Async task failed!");
        }
        }, 1000);
    });
    
    fullPromise
        .then((result) => {
        console.log("TASK 6 Success:", result);
        })
        .catch((error) => {
        console.error("TASK 6 Error:", error);
        })
        .finally(() => {
        console.log("TASK 6 Cleanup: Operation completed.");
        // Runs in both success and failure cases
        });
    