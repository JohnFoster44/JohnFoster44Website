var numSquares = 6;
var colors = [];
var pickedColor;

var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquareButtons();
  reset();
}

function setupSquareButtons() {
  for (var i = 0; i < square.length; i++) {
    //add click listeners to square
    square[i].addEventListener("click", function() {
      //grab colour of clicked
      var clickedColor = this.style.backgroundColor;
      //compare color to pickedColor
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "correct";
        resetButton.textContent = "play again?";
        changeColor(clickedColor);
        h1.style.background = clickedColor;
      } else {
        this.style.background = "#232323";
        messageDisplay.textContent = "try again";
      }
    });
  }
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked color
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "new colors";
  messageDisplay.textContent = "";
  //change colors of squares
  for (var i = 0; i < square.length; i++) {
    if (colors[i]) {
      square[i].style.display = "block";
      square[i].style.background = colors[i];
    } else {
      square[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColor(color) {
  //loop thru all squares
  for (var i = 0; i < square.length; i++) {
    //change each color to match given color
    square[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push to arr
    arr.push(randomColor());
  }
  //return arr
  return arr;
}

function randomColor() {
  //pick red from 0 -255
  var r = Math.floor(Math.random() * 256);
  //pick green
  var g = Math.floor(Math.random() * 256);
  //pick blue
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
