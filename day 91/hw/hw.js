const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve("First finished (1 second)"), 1000);
});

const promise2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second finished (2 seconds)"), 2000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve("Third finished (3 seconds)"), 3000);
});

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error(error);
    });

function add(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 1000);
    });
}

function multiply(a, b) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(a * b), 1200);
    });
}

function square(num) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(num * num), 800);
    });
}

Promise.all([
    add(5, 3),
    multiply(4, 2),
    square(6)
])
.then((results) => {
    console.log(results);
})
.catch((error) => {
    console.error(error);
});

async function firstTask() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "First async result";
}

async function secondTask() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    return "Second async result";
}

async function thirdTask() {
    await new Promise(resolve => setTimeout(resolve, 500));
    return "Third async result";
}

async function runSequentially() {
    const result1 = await firstTask();
    console.log(result1);

    const result2 = await secondTask();
    console.log(result2);

    const result3 = await thirdTask();
    console.log(result3);
}

runSequentially();
