// While Loop (bepanoc)

var sumNumbers = function(array) {
  var sum = 0;
  var i = 0;
  while (i < array.length) {
    sum += array[i];
    i++;
  }
  return sum;
};

var indexToString = function(array) {
  var array_2 = [];
  var i = 0;
  while (i < array.length) {
    array_2.push(i + " is " + array[i]);
    i++;
  }
  return array_2;
};
