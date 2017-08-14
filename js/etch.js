var userInput = 16;

$(document).ready(function () {
  makeGrid(16);
  drawPixils();

  $(window).resize(function () { resize(userInput) });

  $("input").on("click", function () { resetAndSize() });
});


function makeGrid(input) {
  var container = $(".grid");
  var rowNumber = 1;

  for (var i = 1; i <= input; i++) {
    container.append(`<div class='row' id='row${rowNumber}'>`);
    for (var j = 1; j <= input; j++) {
      container.find("#row" + rowNumber).append("<div class='block'></div>");
    }
    rowNumber++;
  }
  resize(input);
}

function resize(input) {
  var blockHeight = window.innerHeight;
  var blockWidth = window.innerWidth;

  if (blockHeight < blockWidth) {
    sizeGrid(blockHeight);
  } else {
    sizeGrid(blockWidth);
  }
}

function sizeGrid(shortSide) {

  var block = $(".block");
  var grid = $(".grid");

  grid.width(shortSide - 10);
  grid.height(shortSide - 10);

  var blockSize = grid.width() / userInput;

  block.height(blockSize);
  block.width(blockSize);
}

function drawPixils() {
  $(".block").on("mouseenter", function () {
    $(this).css("background-color", "black");
  })
}

function resetAndSize() {
  var block = $(".block");
  var row = $(".row");

  block.css("background-color", "white");

  userInput = prompt("Enter prefered resolution");

  while (isNaN(userInput)) {
    userInput = prompt("Please enter an integer");
  }

  $(".row").remove();
  makeGrid(userInput);
  drawPixils();
}