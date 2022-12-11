var $keys = $('.calculator button');
var $screen = $('.screen');
var decimal = false;
var operators = ['+', '-', 'x', '÷'];

$keys.click(function() {
  var keyVal = $(this).data('val');
  output = $('.screen').html();

  console.log(keyVal);

  // clear
  if (keyVal == 'clear') {
    $screen.html('');
    decimal = false;
  }
  // equal
  else if (keyVal == '=') {
    var equation = output;
    var lastChar = equation[equation.length - 1];
    equation = equation.replace(/x/g, '*').replace(/÷/g, '/');
    if (operators.indexOf(lastChar) > -1 || lastChar == '.')
      equation = equation.replace(/.$/, '');
    if (equation) {
      $screen.html(eval(equation));
    }
    decimal = false;
  }
