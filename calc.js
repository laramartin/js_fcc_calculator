var result = "";
var str1 = result;
//var empty = "0";

var operations = {
  "dot": ".", "percent": "%", "multp": "*", "divide": "/", "minus": "-", "plus": "+"
}

$(document).ready(function() {

  function display(input){
    console.log("result: " + result);
    var html = "<p>" + result + "</p>";
    $(".displayResult").html(html);
  }

  $("button").click(function() {
    var val = $(this).attr("value");
    //val = String(val);
    console.log("val: " + val);
    if (!isNaN(val)){
      result = result.concat(String(val));
    } else if (val in operations) {
      result = result.concat(operations[val]);
    } else if(val === "ac"){
      result = "";
    } else if (val === "ce"){
      result = result.slice(0, -1);
    } else if (val === "equal"){
      var actualOP = parseInt(result);
      result = actualOP;
    } else if(val === "ans") { result = "dont know" }
    display(result);
  });

  display(result);
  result = "";
});
