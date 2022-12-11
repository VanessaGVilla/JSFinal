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

             else if ($(this).parent().is('.operators')) {
    var lastChar = output[output.length - 1];
    if (output != '' && operators.indexOf(lastChar) == -1) {
      $screen.html($screen.html() + keyVal);
    } else if (output == '' && keyVal == '-') {
      $screen.html($screen.html() + keyVal);
    }
    if (operators.indexOf(lastChar) > -1 && output.length > 1) {
      $screen.html($screen.html().replace(/.$/, keyVal));
    }
    decimal = false;
  }
  // decimal
  else if (keyVal == '.') {
    if (!decimal) {
      $screen.html($screen.html() + keyVal);
      decimal = true;
    }
  }
  // buttons
  else {
    $screen.html($screen.html() + keyVal);
  }
})
