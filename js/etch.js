//placeholder vars
var userinput = 16;

$(document).ready(function () {
  makeRows(userinput);
});


function makeRows(input) {
  var container = $(".grid");
  container.append("<div class=row>");
  for (var i = 1; i <= input; i++) {
    container.append("<div><p>test</p></div>");
   }
  container.append("</div>");
 }