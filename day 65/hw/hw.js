let box = document.getElementById("myBox");
let position = 0;
let direction = 1;

function animate() {
    position += direction * 2;

    if (position >= 300 || position <= 0) {
        direction *= -1;
    }

    box.style.top = position + "px";
    requestAnimationFrame(animate);
}

animate();

let count = 0;
let countElement = document.getElementById("count");

document.getElementById("plus").addEventListener("click", function() {
    count++;
    countElement.textContent = count;
});

document.getElementById("minus").addEventListener("click", function() {
    count--;
    countElement.textContent = count;
});
