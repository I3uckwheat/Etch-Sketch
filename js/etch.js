var userinput = 16;

$(document).ready(function () {
  makeGrid(userinput);
});


function makeGrid(input) {
  var container = $(".grid");
  var rowNumber = 1;

  for (var i = 1; i <= input; i++) {
    container.append(`<div class='row' id='row${ rowNumber }'>`);
    for (var j = 1; j <= input; j++) {
      container.find("#row" + rowNumber).append("<div class='block'></div>");
    }
    rowNumber++;
  }
}