
//If # <= 0 or A+B > C then not triangle, if A+C > B then not a triangle, if B+C > A then not a triangle.//

$(document).ready(function() {
  $("form#triangle").submit(function(event) {
  event.preventDefault();
  var n1 = parseInt($("#number1").val());
  var n2 = parseInt($("#number2").val());
  var n3 = parseInt($("#number3").val());
  if (n1 <= 0 || n2 <= 0 || n3 <= 0) {
  $('#not').show();
  } else if ((n1 + n2 <= n3) || (n1 + n3 <= n2) || (n2 + n3 <= n1)) {
  $('#not').show();
  } else if ((n1 === n2) && (n1 === n3)) {
  $('#equilateral').show();
  } else if ((n1 === n2) || (n2 === n3) || (n1 === n3)) {
  $('#isosceles').show();
  } else {
  $('#scalene').show();
  }
});
});



//If # > 0, and a === b === c then equilateral//

//If # > 0,If A == B or A == C or B == C//

//IF else Scalene//
