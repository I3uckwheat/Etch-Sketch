var userInput = 16;

$(document).ready(function () {
  makeGrid(userInput);
  sizeGrid(useinput);
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

function sizeGrid(input) {
  var background = "#4cf"
  $(".block").css("background-color", background);
}