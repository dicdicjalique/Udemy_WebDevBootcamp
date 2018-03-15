var numSquares = 6;
var colors = [];
var pickedColor;

var squares = document.querySelectorAll(".square");
var pickedColorDisplay = document.querySelector("#pickedColor");
var header = document.querySelector("#header");
var message = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function() {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            resetGame();
        });
    }

    // Setup squares
    for (var i = 0; i < squares.length; i++) {
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

    // Add reset button listener
    resetButton.addEventListener("click", function() {
        resetGame();
    });

    // Call reset
    resetGame();
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
