//wuzeqo

var addItem = function (item, array) {
  if (array.includes(item) === false) {
  array.push(item);
  return array
  } else {
    return array;
  }
};


var reverseSortedList = function (array) {
  array.sort();
  return array.reverse();
};
