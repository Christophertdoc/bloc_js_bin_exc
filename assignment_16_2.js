//gokeye

var reversePlusOne = function (array) {
  array.reverse();
  array.unshift(1);
  return array;
};

var plusesEverywhere = function (array) {
  var res = [], i=0;
    if (i < array.length)
        res.push(array[i++]);
    while (i < array.length)
        res.push("+", array[i++]);
    var res2 = res.toString();
    return res2.replace(/\,/g,"");
};

var arrayQuantityPlusOne = function(array) {
  return array.length + 1;
};
