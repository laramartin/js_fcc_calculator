var result = "";
var actualOP = "";
var inputUser = "";
var inputArray = [];
var showDisplay = "";
var strOP = "";
var operations = {
  "dot": ".", "percent": "%", "multp": "*", "divide": "/", "minus": "-", "plus": "+"
}

$(document).ready(function() {
  function displayCalculator(input){
    console.log("result: " + input);
    var html = "<p>" + input + "</p>";
    $(".displayResult").html(html);
  }

  $("button").click(function() {
    var val = $(this).attr("value");
    if (!isNaN(val)) {
      inputUser = inputUser.concat(String(val));
      displayCalculator(inputUser);
    } else if(val === "ac"){
      result = "";
      actualOP = "";
      inputUser = "";
      inputArray = [];
      showDisplay = "";
      strOP = "";
      displayCalculator(inputUser);
    } else if (inputUser !== "") {
      if (val in operations) {
        actualOP = operations[val];
        inputArray.push(inputUser);
        inputArray.push(actualOP);
        inputUser = "";
      } else if (val === "ce"){
        inputUser = inputUser.slice(0, -1);
        displayCalculator(inputUser);
      } else if (val === "equal"){
        inputArray.push(inputUser);
        strOP = inputArray.join(" ");
        showDisplay = eval(strOP);
        displayCalculator(showDisplay);
        actualOP === "";
        inputArray = [];
        inputUser = "";
      } else if(val === "ans") { result = "dont know" }
    }
    strOP === "";
  });
});
