// Object Operations (giyuhew)

var copy = function (obj) {
  var newObj = {};
  for (var property in obj) {
    newObj[property] = obj[property];
  }
  return newObj;
};

var extend = function (dest, src) {
  for (var property in src) {
    dest[property] = src[property];
  }
  return dest;
};

var containsValue = function(val, obj) {
  for (var property in obj) {
    if (val === obj[property]) {
      return true;
     }
   }
   return false;
};
