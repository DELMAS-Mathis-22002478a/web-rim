const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const gridSize = 30;
let snake = [{ x: 15, y: 15 }];
let apple = { x: 10, y: 10 };
let direction = "right";
let score = 0;

function draw() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    ctx.fillStyle = "red";
    snake.forEach(segment => {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    });

    // Draw apple
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(apple.x * gridSize + gridSize / 2, apple.y * gridSize + gridSize / 2, gridSize / 2, 0, 2 * Math.PI);
    ctx.fill();

    // Draw score
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 30);
}

function move() {
    let head = { ...snake[0] };

    // Move the head in the current direction
    switch (direction) {
        case "up":
            head.y--;
            break;
        case "down":
            head.y++;
            break;
        case "left":
            head.x--;
            break;
        case "right":
            head.x++;
            break;
    }

    // Check for collisions
    if (head.x < 0 || head.x >= canvas.width / gridSize || head.y < 0 || head.y >= canvas.height / gridSize || isCollision(head)) {
        alert("Game Over! Your score is " + score);
        resetGame();
        return;
    }

    // Check if the head is on the apple
    if (head.x === apple.x && head.y === apple.y) {
        score++;
        generateApple();
    } else {
        // Remove the tail segment
        snake.pop();
    }

    // Add the new head
    snake.unshift(head);

    // Draw the updated game state
    draw();
}

function isCollision(head) {
    return snake.some(segment => segment.x === head.x && segment.y === head.y);
}

function generateApple() {
    apple = {
        x: Math.floor(Math.random() * (canvas.width / gridSize)),
        y: Math.floor(Math.random() * (canvas.height / gridSize))
    };

    // Make sure the apple is not generated on the snake
    while (isCollision(apple)) {
        apple = {
            x: Math.floor(Math.random() * (canvas.width / gridSize)),
            y: Math.floor(Math.random() * (canvas.height / gridSize))
        };
    }
}

function resetGame() {
    snake = [{ x: 15, y: 15 }];
    direction = "right";
    score = 0;
    generateApple();
    draw();
}

document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            if (direction !== "down") {
                direction = "up";
            }
            break;
        case "ArrowDown":
            if (direction !== "up") {
                direction = "down";
            }
            break;
        case "ArrowLeft":
            if (direction !== "right") {
                direction = "left";
            }
            break;
        case "ArrowRight":
            if (direction !== "left") {
                direction = "right";
            }
            break;
    }
});


// Initialize the game
resetGame();

// Update the game loop
setInterval(move, 150);  // You can adjust the interval for the snake's speed
