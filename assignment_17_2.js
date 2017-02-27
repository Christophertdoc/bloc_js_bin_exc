// Looping over objects (wapaziz)

var getKeys = function (obj) {
  var newArray = [];
  for (var property in obj) {
    newArray.push(property);
  }
  return newArray;
};

var getValues = function (obj) {
  var newArray = [];
  for (var property in obj) {
    newArray.push(obj[property]);
  }
  return newArray;
};

var objectToArray = function (obj) {
  var newArray = [];
  for (var property in obj) {
    newArray.push(property + " is " + obj[property]);
  }
  return newArray;
};
