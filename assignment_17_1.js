// Looping over arrays (voracin)

var sumNumbers = function(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

var indexToString = function(array) {
 var array_2 = [];
  for (var i = 0; i < array.length; i++) {
    array_2.push(i + " is " + array[i]);
  }
  return array_2;
};
