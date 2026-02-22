async function successfulAsyncTask() {
    try {
        let result = await new Promise((resolve) => {
            setTimeout(() => resolve("Task completed successfully!"), 1000);
        });
        console.log("Success:", result);
        return result;
    } catch (error) {
        console.error(error);
    }
}

successfulAsyncTask();

async function failingAsyncTask() {
    try {
        await new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Original error")), 1000);
        });
    } catch (error) {
        console.error("Custom error message: Something went wrong!");
    }
}

failingAsyncTask();

async function checkCondition(value) {
    try {
        if (value < 10) {
            throw new Error("Value must be at least 10!");
        }
        console.log("Condition passed! Value:", value);
    } catch (error) {
        console.error("Handled error gracefully:", error.message);
    }
}

checkCondition(5);
checkCondition(15);

async function multipleAsyncTasks() {
    try {
        const task1 = new Promise((resolve) => setTimeout(() => resolve(1), 500));
        const task2 = new Promise((resolve) => setTimeout(() => resolve(2), 1000));
        const task3 = new Promise((resolve) => setTimeout(() => resolve(3), 1500));

        const results = await Promise.all([task1, task2, task3]);

        console.log("All tasks completed. Results:", results);
        const sum = results.reduce((acc, val) => acc + val, 0);
        console.log("Sum of results:", sum);
    } catch (error) {
        console.error(error);
    }
}

multipleAsyncTasks();

