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


(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-77429409-1', 'auto');
ga('send', 'pageview');
