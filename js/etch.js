//placeholder vars
var userinput = 16;

$(document).ready(function () {
  makeRows(userinput);
});


function makeRows(input) {
  var container = $(".grid");
  var rowNumber = 1;

  container.append("<div class='row' id='row" + rowNumber + "'>");

  for (var i = 1; i <= input; i++) {
    container.find("#row" + rowNumber).append("<div class='block'></div>");
  }
}