var numSquares = 6;
var squares = document.querySelectorAll(".square");
var colors = generateColors(numSquares);
var pickedColor = randomizeColor();
var pickedColorDisplay = document.querySelector("#pickedColor");
pickedColorDisplay.textContent = pickedColor;

var header = document.querySelector("#header");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");

var gameModeIsHard = true;

var easyButton = document.querySelector("#easy");
easyButton.addEventListener("click", function() {
    hardButton.classList.remove("selected");
    easyButton.classList.add("selected");
    numSquares = 3;
    resetGame();

    gameModeIsHard = false;
});

var hardButton = document.querySelector("#hard");
hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    resetGame();

    gameModeIsHard = true;
});

resetButton.addEventListener("click", function() {
    resetGame();
});

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function() {
        // compare square color to picked color
        var clickedColor = this.style.backgroundColor;
        if(clickedColor === pickedColor) {
            changeColors(pickedColor);
            header.style.backgroundColor = pickedColor;
            message.textContent = "Correct";
            resetButton.textContent = "Play Again?"
        } else {
            message.textContent = "Try Again";
            this.style.backgroundColor = "#232323";
        }
    });
}

function changeColors(color) {    
    for (var j = 0; j < squares.length; j++) {
        squares[j].style.backgroundColor = color; 
    }
}

function randomizeColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColors(colorCount) {
    var randomColors = [];

    for (var i = 0; i < colorCount; i++) {
        randomColors.push(   
            randomColor()       
        );
    }

    return randomColors;
}

function randomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

function resetGame() {    
    // Generate new colors array
    colors = generateColors(numSquares);

    // Pick new random color
    pickedColor = randomizeColor();    
    pickedColorDisplay.textContent = pickedColor;

    // Change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
            squares[i].style.display = "block";
        } else {
            squares[i].style.display = "none";
        }
    }

    // Reset text message
    message.textContent = "";

    // Reset header color    
    header.style.backgroundColor = "steelblue";

    //Reset button text    
    resetButton.textContent = "New Colors"
}
