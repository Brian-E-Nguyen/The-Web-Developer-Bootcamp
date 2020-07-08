var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = pickedColor();
var colorDisplay = document.getElementById("colorDisplay");
var messaageDisplay = document.querySelector("#message");

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
            messaageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
        }
        else {
            this.style.backgroundColor = "#232323";
            messaageDisplay.textContent = "Try again!";
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

function pickedColor() {
    // Generates a random number based on the length of the colors list
    var randomNumber = Math.floor(Math.random() * colors.length);

    // Returns a random color in the array
    return colors[randomNumber];
}