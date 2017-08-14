

var userInput = 50;

$(document).ready(function () {
  makeGrid(userInput);
  resize(userInput);

  $(".block").on("mouseenter", function () {
    $(this).css("background-color", "black");
  })

  $(window).resize(function () { resize(userInput) });
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