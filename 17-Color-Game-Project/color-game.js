var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
    // Generate all new colors
    colors = generateRandomColors(6);
    // Pick a new random color from array
    pickedColor = pickColor();
    // Change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    // Change colors of squares
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        
    }
    h1.style.background = "#232323"
}) 

colorDisplay.textContent = pickedColor;

for (let i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i];

    // Add click listeners to squares
    squares[i].addEventListener("click", function(){
        // Grab color of clicked square
        var clickedColor = this.style.backgroundColor;
        // Compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "Play again?"
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    })
}

function changeColors(color){
    // Loop through all squares
    for (let i = 0; i < colors.length; i++) {
        // Change each color to match given colors
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    // Generates a random number based on the length of the colors list
    var randomNumber = Math.floor(Math.random() * colors.length);

    // Returns a random color in the array
    return colors[randomNumber];
}

function generateRandomColors(numberOfColors) {
    // Make an array
    var arr = [];
    // Add number of random colors to array
    for (let i = 0; i < numberOfColors; i++) {
        // Get random color and push into array
        arr.push(randomColor());
    }
    // Return that array
    return arr;
}

function randomColor() {
    // Pick a "red" from 0 to 255
    var red = Math.floor(Math.random() * 256);
    // Pick a "greed" from 0 to 255
    var green = Math.floor(Math.random() * 256);
    // Pick a "blue" from 0 to 255
    var blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}