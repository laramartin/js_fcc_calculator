$(document).ready(function() {

  var input = [];

  $( "#zero" ).click(function() {
    input.push(0);
  });
  $( "#one" ).click(function() {
    input.push(1);
  });
  $( "#two" ).click(function() {
    input.push(2);
  });
  $( "#three" ).click(function() {
    alert( "3" );
  });
  $( "#four" ).click(function() {
    alert( "4" );
  });
  $( "#five" ).click(function() {
    alert( "5" );
  });
  $( "#six" ).click(function() {
    alert( "6" );
  });
  $( "#seven" ).click(function() {
    alert( "7" );
  });
  $( "#eight" ).click(function() {
    alert( "8" );
  });
  $( "#nine" ).click(function() {
    alert( "9" );
  });

  var html = "<p>" + input + "</p>";
  $(".displayResult").html(html);
}
